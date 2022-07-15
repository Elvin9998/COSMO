class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="inner-width">
            <a href="" class="logo"><img src="Photo/Logo-2.png" alt=""></a>
            <i class="menu-toggle-btn fas fa-bars"></i>
            <nav class="navigation-menu">
                <a href="home.html">Home</a>
                <a href="AboutUs.html">ABOUT US</a>
                <a href="OurStore.html">STORE</a>
                <a href="News.html">NEWS</a>
            </nav>
        </div>
    </header>
        `
    }
}

customElements.define('my-header', myHeader)



class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <footer class="footer">
        <div class="container">
            <div class="footer-body">
                <div class="footer-about">
                    <h2>About Company</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore laudantium nesciunt
                        sequi culpa a harum iusto illum at accusantium impedit ipsam dolor placeat facere quia, eligendi
                        rerum voluptate maiores.</p>
                    <ul class="social-links">
                        <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href=""><i class="fab fa-instagram"></i></a></li>
                        <li><a href=""><i class="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h2>Links</h2>
                    <ul class="footer-links-list">
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>

                <div class="footer-contacts">
                    <h2>Contacts Info</h2>
                    <ul class="footer-contact-list">
                        <li><a href="#"><i class="fas fa-map-marker-alt"></i>New Yourk city,Street 12124354</a></li>
                        <li><a href="#"><i class="fas fa-envelope"></i>Loremipsum@mail.com</a></li>
                        <li><a href="#"><i class="fas fa-phone-alt"></i> 123-4567-897</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>
    
        `
    }
}

customElements.define('my-footer', myFooter)


$(function () {

    $(document).ready(function () {
        $('#open').click(function () {
            $('.model-container').css('transform', 'scale(1)');
        });


        $('#close').click(function () {
            $('.model-container').css('transform', 'scale(0)');
        });

    });

});