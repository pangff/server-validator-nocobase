/*
 * @Author: pangff
 * @Date: 2022-05-08 15:02:57
 * @LastEditTime: 2022-05-08 20:21:58
 * @LastEditors: pangff
 * @Description: nocobase server validator
 * @FilePath: /server-validator-nocobase/src/index.ts
 * stay hungry,stay foolish
 */

export interface FieldValidator {
    type: string
    name: string
    validate: object
}

export interface Validator {
    collectionName: string
    fieldValidators: Array<FieldValidator>
}

export function updateValidators(app: any, validators: Array<Validator>): Array<string> {
    let validatorArray = []
    for (let validator of validators) {
        let collection = app.db.getCollection(validator.collectionName)

        if (collection == null) {
            validatorArray.push(`collection ${validator.collectionName} no exists`)
            continue
        }

        for (let fieldValidator of validator.fieldValidators) {
            if (collection.hasField(fieldValidator.name)) {
                try {
                    collection.setField(fieldValidator.name, fieldValidator)
                } catch (e) {
                    validatorArray.push(
                        `setField ${fieldValidator.name} in collection ${validator.collectionName} error`,
                    )
                }
            } else {
                validatorArray.push(`field ${fieldValidator.name} in collection ${validator.collectionName} no exists`)
            }
        }
    }
    return validatorArray
}
