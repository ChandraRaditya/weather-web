class SearchBar extends HTMLElement {
     
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.shadowDOM.querySelector("#searchValue").value;
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-box{
            position: absolute;
            top: 130px;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #2f3640;
            height: 40px;
            border-radius: 40px;
            padding: 10px;
            margin-top: 10px;
            margin-bottom: 40px
        }
        @media only screen and (max-width:598px) {
            #search-btn {
                transform: translate(0,-85%);
            }
        }
        
        @media only screen and ( max-width:900px) { 
            .search-box > .search-txt{
                width: 240px;
                padding: 0 6px;
                
            }
            .search-box > search-btn{
                background: white;
                color: black;
                
            }
        }
        .search-box:hover > .search-txt{
            width: 240px;
            padding: 0 6px;
        }
        .search-box:hover > .search-btn{
            background: white;
            color: black;
        }
        #search-btn{
            color: #e84118;
            float: right;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.4s;
            color: white;
            cursor: pointer;
        }

        .search-txt{
            border: none;
            background: none;
            outline: none;
            float: left;
            padding: 0;
            color: white;
            font-size: 16px;
            transition: 0.4s;
            line-height: 35px;
            width: 0px;
            font-weight: bold;
        .grid{
            height: 100px;
            width: 100%;
        }
        
        </style>
        <div class="search">
            <div class="search-box">
                <input placeholder="Search City" class="search-txt" id="searchValue" type="search">
                <button id="search-btn" type="submit"><img class="icon" src="./img/search.png" width=20px;></button>
            </div>
        </div>`;
  
        this.shadowDOM.querySelector("#search-btn").addEventListener("click", this._clickEvent);
    }
 }
  
 customElements.define("search-bar", SearchBar);