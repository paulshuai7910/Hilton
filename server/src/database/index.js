export const getAllDocumentsFromCollection = async (
  database,
  collectionName
) => {
  try {
    // 使用AQL查询来获取集合中的所有文档
    const query = `FOR doc IN ${collectionName} RETURN doc`
    const cursor = await database.query(query)
    // 遍历游标以获取所有文档
    let allDocuments = []
    for await (const doc of cursor) {
      allDocuments.push(doc)
    }

    return allDocuments
  } catch (err) {
    console.error("Error fetching documents:", err)
    throw err
  }
}
export const getFilterDocumentsFromCollection = async (
  database,
  collectionName,
  value
) => {
  try {
    // 使用参数化查询来防止SQL注入
    const query = `FOR doc IN ${collectionName} FILTER doc.name == @value RETURN doc`
    const bindVars = { value } // 注意这里使用的是value作为变量名，与查询中的@value相对应

    // 执行查询
    const cursor = await database.query(query, bindVars, { batchSize: 1000 })
    // 遍历游标以获取所有文档
    let allDocuments = []
    for await (const doc of cursor) {
      allDocuments.push(doc)
    }

    return allDocuments
  } catch (err) {
    console.error("Error fetching documents:", err)
    throw err
  }
}
