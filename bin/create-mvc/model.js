module.exports = function Model( Nome ){
	return `export default interface ${Nome}Model {
	id?: Number
}`
}