import { selectPlayerById } from "../feature/player/sql.js"

export const resolveOwner = (parent, _input, contextValue, _info) => {
  const { db, authuser: { id: ownerId } } = contextValue
  const { id: _parentId } = parent

  return db.prepare(selectPlayerById).get({ id: ownerId })
}

export const resolveManyByParent = (selector, parentIdField, childIdField) => (parent, _input, contextValue, _info) => {
  const { db, authuser: { id: _ownerId } } = contextValue
  const id = parent[parentIdField]

  return db.prepare(selector).all({ [childIdField]: id })
}

export const resolveOneByParent = (selector, parentIdField, childIdField) => (parent, _input, contextValue, _info) => {
  const { db, authuser: { id: _ownerId } } = contextValue
  const id = parent[parentIdField]
  const params = { [childIdField]: id }

  return db.prepare(selector).get(params)
}

export const getAllOf = (selector) => (_parent, _input, contextValue, _info) => {
  const { db, authuser: { id: _ownerId } } = contextValue

  return db.prepare(selector).all()
}
