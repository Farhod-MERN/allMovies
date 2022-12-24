export default function Footer (){
    return(
        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()}  <b className="right">Created by Farhod</b>
            </div>
          </div>
        </footer>
    )
}