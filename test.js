const { Schema } = require("mongoose");



let usermobile= [{
    primary :"123123",
},{
    alternative:"123123"
},{
    alter2 :"123123"
}]




const UserMobileSchema = new mongoose.Schema({
    primary: {
        type: String,
    },
    alternative: {
        type: String,
    },
    alter2: {
        type: String,
    }
});


const dynamicMobile = new Schema ({
    label: { type: String, required: true },
    number: { type: String, required: true },
});

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },

    dynamicFeatures: [dynamicMobile],
});
