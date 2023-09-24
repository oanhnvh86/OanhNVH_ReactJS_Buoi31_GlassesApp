import React, { Component } from 'react'

export default class GlassesApp extends Component {

    // Attribute(Property): glasses array
    arrGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    
    // Init State Property
    state = {
        url: this.arrGlasses[0],

        //? how to get name
        // img:{ 
        //     url: this.arrGlasses[0].url ,
        //     name: this.arrGlasses[0].name ,
        // }
    };

    // Set State
    handleChangeUrl = (newurl) => {
        console.log("newurl:",newurl)
        this.setState({
            url: newurl,
        })

        //? how to get name
        // this.setState({
        //     img:{ 
        //         url: newurl,
        //         name: newName ,
        //     }
        // })
    };

    // Show glasses list
    showGlassesList = () => {
        //return: trả kết quả ra khỏi hàm showGlassesList
        return this.arrGlasses.map((glasses) => {
            //Bóc tách thuộc tính => giúp dùng nhanh thuộc tính mà ko cần dùng cú  pháp phone.hinhAnh
            let { id, url, name } = glasses;
            // console.log("url:",url)

            //Đối tượng div column
            //key: gần giống id của object, giúp react phân biệt giữa các đối tượng cùng loại
            //map: return bên trong map: ko dừng vòng lặp (chỉ dừng vòng lặp khi hết mảng) => trả về 1 mảng mới.
            // trả về mảng mới , chưa trả ra khỏi phương thức showGlassesList
            return <div className="col-2 itemStyle" key={`glasses${id}`}>
                <button onClick={() => this.handleChangeUrl({url})}>
                    <img src={url} className="card-img-top" alt={name} />
                </button>
            </div>
        })
    }

    //Output to UI
    render() {
        let styleModel = {
            width: "300px",
            height: "300px",
        }
        let styleGlass = {
            width: "150px",
            height: "50px",
            opacity: .5,

        }
        
        let {url} = this.state.url;
        //? how to get name
        // let {url,name} = this.state.img;
        
        
        console.log("return url:", url);
        // console.log("return name:", name);

        return (
            <div className='styleBg'>
                {/* Model */}
                <div className="modelSize pt-5">
                    <img style={styleModel} src="./img/glassesImage/model.jpg" alt="model" />
                    <div className='setGlass'>
                        <img style={styleGlass} src={url} alt= '? how to get name' />
                    </div>
                </div>
                {/* Glasses List  */}
                <div className="row mt-5 listGlasses">
                    {this.showGlassesList()}
                </div>
            </div>
        )
    }
}
