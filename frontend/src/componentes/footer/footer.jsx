import './footer.css'
function footer() {
    return (
        <footer className='footer'>
            <div className='top'>
                <strong>Top 3 frutas que me gustan:</strong>
                <ul>
                    <li>1 Mango</li>
                    <li>2 Pelon</li>
                    <li>3 Mandarina</li>
                </ul>
            </div>

            <div className='footer-gif'>
                <p>&copy; Pagina GOD 2024</p>
                <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHVzY2JhbjJpNnBieDQ2bWJnY25xZzl6bGt0cThhN3ZncDZ2dmtkdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1TGke2Ba9nbisAXQsJ/giphy.gif" alt="gif" width="100px" />
            </div>
        </footer>

    )
}
export default footer