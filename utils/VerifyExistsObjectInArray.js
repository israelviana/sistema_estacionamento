class VerifyExistsObjectInArray {
    verifyExistsObjectInArray(array, attributeOfObject, valueSearch){
        for (let i = 0; i < array.length; i++) {
            if (array[i][attributeOfObject] === valueSearch) {
                return true;
            }
        }
        return false;
    }
}

module.exports = VerifyExistsObjectInArray