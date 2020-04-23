'use strict'

//made for CRUD & DB interactions
class  Model {
    constructor(schema) {
        this.schema = schema;
    }
    read(_id) {
        let queryObj = _id ? {_id} : {};
        return this.schema.find(queryObj);
        }
    create(obj) {
        let newObj = this.schema(obj)
        return newObj.save();
    }
    update(_id, obj) {
        return this.schema.findByIdAndUpdate(_id, obj, {new: true});
    }
    delete(_id) {
        return this.schema.findByIdAndUpdate(_id);
    }
}

module.exports = Model;