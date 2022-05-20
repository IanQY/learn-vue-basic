
const vm = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法珠玑》',
        date: '2006-9',
        price: 85.00,
        count:1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count:1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2006-10',
        price: 39.00,
        count:1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count:1
      },
    ]
  },
  filters:{
    formatPrice:function (price) {
      return '￥'+ price.toFixed(2)
    }
  },
  methods: {
    decrement(i){
      if(this.books[i].count>1){
        this.books[i].count--;
      }
    },    
    increment(i){
      this.books[i].count++;
    },
    removeData(i){
      // console.log(this.books[i])
      this.books.splice(i,1)
      // delete this.books[i]
    }
  },
  computed:{
    totalPrice(){
      // let totalPrice= 0
      //forin
      // for(let index in this.books){
      //   // console.log(this.books[index].price)
      //   // console.log(this.books[index].count)
      //   totalPrice+=(this.books[index].price*this.books[index].count)
      //   // console.log(this.books[index]);
      //   // price=item
      // }
      // forof
      // for (const book of this.books) {
      //   console.log(book);
      //   totalPrice+=(book.price+book.count)
      // }

      let totalPrice=this.books
      .map((n)=>{return n.price*n.count})
      .reduce((pre,curr)=>pre+curr)
      return totalPrice
    }
  }
})