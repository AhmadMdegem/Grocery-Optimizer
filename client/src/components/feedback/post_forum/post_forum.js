import './post_form.css';
import { Rating } from 'react-simple-star-rating'
import { observer, inject } from 'mobx-react'
import React , { useEffect } from 'react'
import { Button, Snackbar } from '@mui/material';

//firebase
import { useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { async } from '@firebase/util';
//

const PostForum = inject("store")(observer((props) => {
{/* //firebas */}
    /* const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        const imageRef = ref(storage, "image");
        await uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then((newURL) => {
                        console.log(newURL)
                        setUrl(url)

                    })
                    .catch((error) => {
                        console.log(error.message, "error getting the image url");
                    });
                setImage(null);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }; */
    {/* //firebas */}

    useEffect(() => {

        props.store.getProductsNameList()

        props.store.getStoresNameList()

        props.store.getStoresLocationList()

    }, [props.store])

    return (
        <div className="Form">

            <Snackbar
                open={props.store.clickOnAddPost}
                autoHideDuration={5000}
                message={props.store.addPostStatus ? "Store was added successfully" : "Adding store failed"}
            />

            <label>Select Store</label>
            <select name="storeName" onChange={props.store.handelInputs} defaultValue={'default'}>
                <option value="">Choose a Store...</option>
                {props.store.storesNameList.map(store => {
                    return (
                        <option key={store} value={store}>{store}</option>
                    )
                })}
            </select>

            <label>Select City</label>
            <select name="storeLocation" onChange={props.store.handelInputs} defaultValue={'default'}>
                <option value="" >Choose a Location...</option>
                {props.store.storesLocationList.map(city => {
                    return (
                        <option key={city} value={city}>{city}</option>
                    )
                })}
            </select>

            <label>Product Name</label>
            <select name="productName" onChange={props.store.handelInputs} defaultValue={'default'}>
                <option value="" >Choose a Product...</option>
                {props.store.productsNameList.map(product => {
                    return (
                        <option key={product} value={product}>{product}</option>
                    )
                })}
            </select>

            <div className="PriceAndScore">

                <div className="priceDiv">
                    <label>Price</label>
                    <input name="price" onChange={props.store.handelInputs} type='number' />
                </div>

                <div className="scoreDiv">
                    <div>Score</div>
                    <div>
                        <Rating name="score" onClick={props.store.handelScore} ratingValue={props.store.score * 20} />
                    </div>
                </div>

            </div>

            <div className="DescriptionAndImage">

                <div className="textArea">
                    <label>Note</label>
                    <textarea name="note" onChange={props.store.handelInputs} className="textarea" placeholder="Enter Note here" form="usrform"></textarea>
                </div>

                <div className="AddIMage">
                    {/* <label>Upload Image</label>
                        <input type="file" id="img" name="img" accept="image/*" /> */}
                        {/* //firebas */}
                    {/* <label>Upload Image</label>
                    <img src={url} sx={{ width: 150, height: 150 }} />
                    <input type="file" onChange={handleImageChange} />
                    <button onClick={handleSubmit}>Submit</button> */}
                    {/* //firebas */}
                    <label>Upload Image</label>
                    <input type="file" id="img" name="img" accept="image/*" />
                </div>

            </div>

            <Button onClick={props.store.handelAddClick} className="addPostButton">Add Post</Button>

        </div>
    )

}))

export default PostForum