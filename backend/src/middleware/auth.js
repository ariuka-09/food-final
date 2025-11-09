import jwt from "jsonwebtoken"

export function verifyToken (req, res, next){
    const token = req.headers["authorization"];
    // const token = req.get('Authorization');
    
    if(!token){
        res.status(403).send({message:"access not granted"})
    }
    const BearerToken = token.split(" ")[1]
    
    try {
        const decoded = jwt.verify(BearerToken, 'aimrnuutscode')
        console.log("decoded", decoded)
        next()
    } catch (error) {
        console.error(error)
    }
}
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTA5NjgyNzU2NTY2Y2NhODZmNDcxYTEiLCJlbWFpbCI6ImJvZ2kiLCJwYXNzd29yZCI6IiQyYiQwNCQxNjdjdVhQVGJ6Vy5paVlMVnhNSWJ1SGdpZk1PTzkwT3ppM0N3S0NMbEd0NkhMeWNCdmVSbSIsInJvbGUiOiJ1c2VyIiwib3JkZXJlZEZvb2RzIjpbXSwiY3JlYXRlZEF0IjoiMjAyNS0xMS0wNFQwMjo0Mjo0Ny4zNjhaIiwidXBkYXRlZEF0IjoiMjAyNS0xMS0wNFQwMjo0Mjo0Ny4zNjhaIiwiX192IjowLCJpYXQiOjE3NjIyMjQ4NTcsImV4cCI6MTc2MjIyODQ1N30.d7iRlU20XAXljEpy9ziBbKZIDGjpSlCxwIiUa4Cr2CU"
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTA5NjgyNzU2NTY2Y2NhODZmNDcxYTEiLCJlbWFpbCI6ImJvZ2kiLCJwYXNzd29yZCI6IiQyYiQwNCQxNjdjdVhQVGJ6Vy5paVlMVnhNSWJ1SGdpZk1PTzkwT3ppM0N3S0NMbEd0NkhMeWNCdmVSbSIsInJvbGUiOiJ1c2VyIiwib3JkZXJlZEZvb2RzIjpbXSwiY3JlYXRlZEF0IjoiMjAyNS0xMS0wNFQwMjo0Mjo0Ny4zNjhaIiwidXBkYXRlZEF0IjoiMjAyNS0xMS0wNFQwMjo0Mjo0Ny4zNjhaIiwiX192IjowLCJpYXQiOjE3NjIyMjQ4NTUsImV4cCI6MTc2MjIyODQ1NX0.SxhWYp2jfnYwi-y1K7fvVnxX9esd8KYLOJerP_GUjxE"    