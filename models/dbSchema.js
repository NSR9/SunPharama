var mongoose = require("mongoose");

var {Schema} = mongoose;

var dataSchema = new Schema({
 
    
    
        ID : Number,
        Time : String,
        Date : String,
        Phase_1_volt_amps : Number,
        Total_system_power_factor : Number,
        Phase_2_volt_amps: Number,
        power_consumed	: Number,
        Phase_3_volt_amps : Number,	    
        Phase_1_power_factor : Number,	
        Phase_2_power_factor : Number,	
        Phase_3_power_factor : Number,	
        LPG : Number,
        DIESEL : Number,
        power_diff : Number,
        lpg_diff : Number,
        diesel_diff : Number
        
})

mongoose.model('data',dataSchema);