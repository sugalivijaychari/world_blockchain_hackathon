pragma solidity 0.4.24;

contract Biography{

    struct Vehicle{
        string chassisNumber;
        string model;
        string numberPlate;
        uint256 amountBought;
        string ownerAadhar;
        string features;
        
    }
    
    mapping(uint256 => Vehicle) public owner;
    uint256 public ownerCount;

    constructor() public {
        addVehicle("1HGBH41JXMN109186", "Toyota Celica", "AP02 AZ 9999", 10000000,  "591623667509", " AC condition is good");
        addVehicle("2HGBH41JATP109186", "Eco Ford", "AP15 LZ 5869", 20000000,  "536525485412", " AC condition is good");
        addVehicle("3HGBH41JWRN109186", "Maruthi Suzuki", "AP06 IO 1548", 30000000,  "585263584758", " AC condition is good");
    }

    function addVehicle(string _chassisNumber, string _model, string _numberPlate, uint256 amount,string aadhar, string features){
        ownerCount++;
        owner[ownerCount]=Vehicle(_chassisNumber,_model,_numberPlate,amount,aadhar,features);
    }

    
    
}