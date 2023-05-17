class Hotel {  
    Address;
    NumberOfRooms;
    #minFloor;
    #maxFloor;
    rooms;

  constructor(Address,NumberOfRooms,maxFloor,minFloor, rooms) {
    this.Address = Address;
    this.NumberOfRooms = NumberOfRooms;
    this.#maxFloor = maxFloor;
    this.#minFloor = minFloor;
    this.rooms = rooms;
    }
    printAdv(){
        return 'welcome to our hotel ' ;

    }
    listBookedRoom(){
        for(let i=0;i<5;i++)
        if(this.rooms.isBooked ==true)
        return this.rooms;    }
}


class Room{

    floorNum;
    roomNum;
    price;
    #isBooked;

    constructor(floorNum, roomNum, price, isBooked) {
      this.floorNum = floorNum;
      this.roomNum = roomNum;
      this.price = price;
      this.#isBooked = isBooked;
    }
    printRoom(){//print room info
        console.log('Your room details is : '+' floor num = '+this.floorNum+' room num = '+
        this.roomNum+' room price = $' +this.price+' is booked ? '+this.#isBooked ) ;
    
    }
    book(){//if room not booked book it .
         this.isBooked=true ;
    
    }
    itIsBooked(){ //ask if the room booked or not
        return this.isBooked ;
    
    }
}





class SleepingRoom extends Room{   
    personCapcity;

    constructor(floorNum, roomNum, price, isBooked,personCapcity) {
        super(floorNum, roomNum, price, isBooked) 
        this.personCapcity = personCapcity;

}}


class RoomView extends Room{
    view;
    numOfBed;

    constructor(floorNum, roomNum, price, isBooked,view, numOfBed) {
        super(floorNum, roomNum, price, isBooked) 
        this.view = view;
        this.numOfBed = numOfBed;

}
}
const room1 = new Room(1, 1, 30,true,);
const room2 = new SleepingRoom(1, 2, 20,false,2);
const room3 = new SleepingRoom(2, 3, 12,false,3);
const room4 = new RoomView(1, 4, 10,true,true,2);
const room5 = new RoomView(2, 5, 35,true,false,1);

const hotel1 = new Hotel('jenin', 5, 2,0,[room1,room2,room3,room4,room5]);