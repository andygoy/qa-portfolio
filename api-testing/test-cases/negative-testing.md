# Negative Test Cases — PokeAPI

## Equivalence Partitioning Groups

| Group | Input | Expected Result |
|-------|-------|----------------|
| Non-existing name | pikachu123 | 404 Not Found |
| Non-existing ID | 99999 | 404 Not Found |
| Special characters | @#$ | 400 Bad Request |
| Empty field | (empty) | 200 + list of all Pokémon |

---

## Test Case 1: Non-existing name

**Title:** Get Pokémon data for a non-existing name

**Preconditions:** None (public API, no auth required)

**Steps:**
1. Send a GET request to: `https://pokeapi.co/api/v2/pokemon/pikachu123`

**Expected result:**
1. Status code: 404
2. Response body contains: `{"status": 404, "message": "Not Found"}`

**Postman Test Scripts:**
```javascript
pm.test("Status code is 404", function () {
    pm.response.to.have.status(404);
});

pm.test("Response body says Not Found", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.message).to.eql("Not Found");
});
```

---

## Test Case 2: Non-existing ID

**Title:** Get Pokémon data for a non-existing ID

**Preconditions:** None (public API, no auth required)

**Steps:**
1. Send a GET request to: `https://pokeapi.co/api/v2/pokemon/99999`

**Expected result:**
1. Status code: 404
2. Response body contains: `{"status": 404, "message": "Not Found"}`

**Postman Test Scripts:**
```javascript
pm.test("Status code is 404", function () {
    pm.response.to.have.status(404);
});

pm.test("Response body says Not Found", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.message).to.eql("Not Found");
});
```

---

## Test Case 3: Special characters

**Title:** Get Pokémon data using special characters

**Preconditions:** None (public API, no auth required)

**Steps:**
1. Send a GET request to: `https://pokeapi.co/api/v2/pokemon/@#$`

**Expected result:**
1. Status code: 400
2. Response body indicates a bad request

**Postman Test Scripts:**
```javascript
pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});

pm.test("Response body message is correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.message).to.eql("Invalid endpoint or resource formatting");
});
```

---

## Test Case 4: Empty field

**Title:** Get Pokémon list with empty endpoint

**Preconditions:** None (public API, no auth required)

**Steps:**
1. Send a GET request to: `https://pokeapi.co/api/v2/pokemon/`

**Expected result:**
1. Status code: 200
2. Response body contains a list of Pokémon with a count greater than 0

**Postman Test Scripts:**
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response body message is correct", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.count).to.be.above(0);
});
```
