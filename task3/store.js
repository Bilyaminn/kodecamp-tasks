class KCStore {
    constructor(){
        this.products = []
    }

    addProduct(product) {
        this.products.push(product)
          return 'Product added successfully'
    }

    updateProduct(productId, updatedData ) {
        for(let i = 0; i < this.products.length; i++) {
            if(this.products[i].id === productId) {
              for(let key in updatedData) {
                this.products[i][key] = updatedData[key]
              }
            }
        }
        return 'Product not found'
    }

    viewProduct() {
          return this.products
    }

    deleteProduct(productId){
      for(let i = 0; i < this.products.length; i++){
        if(this.products[i].id === productId){
          this.products.splice(i, 1)
          return 'Product deleted successfully'
        }
      }
      return 'Product not found'
    }
}

const store = new KCStore()
console.log(store.addProduct({id:1, name:'Phone', price:'50000'}))
console.log(store.addProduct({id:2, name:'Soap', price:'1000'}))
console.log(store.addProduct({id:3, name:'Laptop', price:'600000'}))
// console.log(store.updateProduct(4, {price: '48000'}))
console.log(store.deleteProduct(2))
console.log(store.viewProduct())