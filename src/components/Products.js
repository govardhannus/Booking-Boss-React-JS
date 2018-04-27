import React from 'react';
import style from './products.scss';

var reactUltimatePaginationBootstrap4 = require("react-ultimate-pagination-bootstrap-4")
const api = require('../services/api')
const UltimatePagination = reactUltimatePaginationBootstrap4.default;

const BUTTONS = ['pages'];

class Products extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            product: [],
            page: 0,
            per_page: this.props.perpage
        }
        this.onPageChange = this.onPageChange.bind(this);

    }

    componentDidMount() {
        this._fetchData();
    }

    onPageChange(page) {
        this.setState({page});
    }

    demoMethod(){
        var value = this.state.product.length;
        this.props.lengthData(value);
    }

    _fetchData() {
        api.getdata()
            .then(products =>
                this.setState({
                    product: products
                }))
    }

    render() {
        //pagination
        console.log(this.props, 'props')
        const totalno = Math.ceil(this.state.product.length / this.props.perpage);
        const total = 50;
        const current_page = this.state.page
        const start_offset = (current_page - 1) * this.state.per_page;
        let start_count = 0;

        return (
            <div>
                <div className="relative">
                    {
                        this.state.product.map((products, index) => {
                                if (index >= start_offset && start_count < this.props.perpage) {
                                    start_count++;
                                    return (
                                        <div className="productContainer">
                                            <img src={products.product_image} className="image"></img>
                                            <div className="hr"></div>
                                            <div className="data">
                                                <div className="title">{products.product_name}</div>
                                                <div className="description">{products.description}</div>
                                                <div className="price">{products.price}</div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )
                    }


                </div>
                <div className="">
                    <UltimatePagination
                        currentPage={this.state.page}
                        totalPages={totalno}
                        onChange={this.onPageChange}
                    />
                </div>
            </div>


        )
    }


}

export default Products;