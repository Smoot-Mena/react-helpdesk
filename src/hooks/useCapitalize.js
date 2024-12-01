const useCapitalize = (str) => {
    
    return str.toLowerCase()
    .split(" ")
    .map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase()))
    .join(" ");

}
 
export default useCapitalize;