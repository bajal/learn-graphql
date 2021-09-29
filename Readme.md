## Learning GraphQL

How this project was setup:
```
npm init -y
npm install graphql apollo-server nodemon
```

To run:
```
npm start
```


<hr>
Stuff to know:

* How to use filters
* How to use variables
```
query($status :LiftStatus) { <-- variable declaration
 closed: liftCount(status:CLOSED)   <-- a filter
  allLifts (status: $status) {  <-- a filter that uses a variable
    liftName: name
    capacity
    status
  }
}
```
```
query {
  allLifts {
    liftName: name
    capacity
    status
    trailAccess{
      name
      status
      accessedByLifts {
        name
      }
    }
  }
}
```
```
query AllLifts {  <-- operation name
   allLifts {
    liftName: name
    capacity
    status
  }
}
```
#### MUTATIONS
```
mutation MyMut {

  setTrailStatus(id:"blackhawk" status:OPEN) {
    name
    status
  }

}
```

#### FRAGMENTS

```
query allTrails {
   Trail (id: "blackhawk")  {
			... AllTrailFields
  }
}


fragment AllTrailFields on Trail {
  id
  name
  night
  difficulty
  status
}
```

#### SUBSCRIPTION
