import mongoose, { Schema, models } from "mongoose";

const AddressSchema = new Schema(
  {
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    Address1: {
      type: String,
      required: true,
    },
    City : {
      type: String,
      required: true,
    },
    State  : {
      type: String,
      required: true,
    },
    Mobile_Number: {
        type: Array[3],
        required: true
    },
    
  },

  { timestamps: true }
);

const Address = models.Address || mongoose.model("Address", AddressSchema);

export default Address;


//  5 address 



// mobile number ---- 3 mobilenumber 


// 1 .Primary 
// 2 . Altern
// 3. ALter2 