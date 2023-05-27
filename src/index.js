// write your code here
{
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }
  
  body {
    padding: 1rem;
    text-align: center;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  header {
    padding: 0.5rem;
    width: 100%;
    color: white;
    background-color: black;
  }
  
  #ramen-menu {
    display: flex;
    overflow-x: auto;
    margin: 1rem 0;
    max-width: calc(100vw - 2rem);
  }
  
  #ramen-menu img {
    flex: 0 1 auto;
    height: 150px;
    margin-right: 0.5rem;
    cursor: pointer;
  }
  
  #ramen-menu img:last-child {
    margin-right: 0;
  }
  
  #ramen-detail {
    position: relative;
  }
  
  .detail-image {
    height: 350px;
  }
  
  .name,
  .restaurant {
    position: absolute;
    left: 10px;
    padding: 0.25rem 5rem 0.25rem 1rem;
    background-color: rgba(255, 255, 255, 0.8);
  }
  
  .name {
    bottom: 60px;
  }
  
  .restaurant {
    bottom: 20px;
  }
  
  form {
    margin: 1rem 0;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  input,
  textarea {
    font-size: 1rem;
    border: 1px solid black;
    background-color: white;
    padding: 0.5rem;
    margin: 0.25rem 0;
    width: 100%;
  }
  
  input[type="submit"] {
    color: white;
    border: 1px solid white;
    background-color: black;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  input[type="submit"]:active {
    background-color: gray;
  }
  
  form h4 {
    width: 100%;
    padding: 0.25rem;
    margin: 0.5rem 0;
    color: white;
    background-color: black;
  }