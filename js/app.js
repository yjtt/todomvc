;(function () {
	//console.log(123)
const todos = [
		{
			id:1,
			title:'吃饭',
			done:true
		},
		{
			id:2,
			title:'睡觉',
			done:false
		},
		{
			id:3,
			title:'打豆豆',
			done:false
		},
		{
			id:4,
			title:'看帅哥',
			done:true
		}
	]

	new Vue({
		el:'#todoapp',
		data: {
			todos,
			inputText:'',
			currentEdit:null,
			backTitle:''
		},
		methods: {
			addTodo(e){
				//console.log('enter')
				//拿到文本框中的数据
				//解构赋值
				const {inputText,todos} = this
				//const inputText = this.inputText
				//cosnt todos = this.todos
				//非空校验
				if(inputText.trim().length==0){
					return
				}
				//获取唯一的id
				const lastItem = todos[todos.length -1]
				const id = lastItem ? lastItem.id + 1 : 1
				//添加到数组中
				
				todos.push({
					id:5,
					title:this.inputText,
					done:false
				})
				//清空文本框
				this.inputText = ''
			},

			removeTode (index) {
				this.todos.splice(index,1)
			},

			getEditing(item){
				//console.log(666)
				//将currentEdit赋值为当前双击的任务项
				this.currentEdit = item
				this.backTitle = item.title
			},

			saveEdit(item,index){
				//console.log('保存编辑')
				//判断被编辑的任务项是否为空
				//如果为空，则直接删除
				//如果不为空，则保存编辑，去除编辑样式
				if(item.title.trim().length === 0){
					//执行删除操作
					this.todos.splice(index,1)
				}else {
					this.currentEdit = null
				}
			},

			//esc取消编辑
			cancelEdit(){
				//console.log(123)
				//让任务项的title回归原始数据
				//去除编辑样式

				//这里一旦取消编辑去除编辑样式，就会导致blur的事件触发
				//blur事件函数saveEdit中要访问this.currentEdit.title
				//所以就报错了。因为this.curretEdit已经在这里被设置为null了
				//null.title
				this.currentEdit.title = this.backTitle
				this.currentEdit = null
			}
		}
	})
	
})();
