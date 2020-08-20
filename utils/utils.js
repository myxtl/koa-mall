function camel (data) {
  if (typeof data != 'object' || !data) return data  
  if (Array.isArray(data)) {
    return data.map(item => camel(item))
  }
  
  const newData = {}
  for (let key in data) {
    let newKey = key.replace(/_([a-z])/g, (p, m) => m.toUpperCase())
    newData[newKey] = camel(data[key])
  }
  return newData
}

function underline (data) {
  if (typeof data != 'object' || !data) return data
  if (Array.isArray(data)) {
    return data.map(item => underline(item))
  }
  
  const newData = {}
  for (let key in data) {
    let newKey = key.replace(/([A-Z])/g, (p, m) => `_${m.toLowerCase()}`)
    newData[newKey] = underline(data[key])
  }
  return newData
}

module.exports = {
  camel,
  underline
}
