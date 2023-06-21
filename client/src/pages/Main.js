
const Main = () => {
    return ( 
        <div>
        <section id="about">
          <div class="about-wrapper container">
            <img class="mainpage-image" src='https://github.com/Priyanshu475/MYFitnessPal/assets/96469123/460ba5d2-551f-4bf7-b060-aa064eddd12e' alt="" />

            <div  className='Text-mainpage'>
              <h3>About Us</h3>
              <h4>One membership for all your fitness needs</h4>
              <p> Welcome to MyFitnessPal, your ultimate fitness tracker and partner on your journey towards a healthier and fitter lifestyle. We are passionate about helping individuals achieve their fitness goals by providing powerful tools, personalized guidance, and a supportive community.

At MyFitnessPal, we understand that maintaining a healthy lifestyle is not just about counting calories or tracking workouts; it's a holistic approach that encompasses nutrition, exercise, and overall well-being. That's why we have created a comprehensive platform that combines cutting-edge technology with expert advice to empower you to make informed decisions and stay motivated.</p>
            </div>
          </div>
        </section>
        <section id="testimonials">
      <h2 class="testimonial-title">What Our Users Say</h2>
      <div class="testimonial-container container">
        <div class="testimonial-box">
          <div class="customer-detail">
            <div class="customer-photo">
              <img src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg" alt="" />
              <p class="customer-name">Priyanshu Dubey</p>
            </div>
          </div>
          <div class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="testimonial-text">
          "MyFitnessPal has been a game-changer for me. The app makes it incredibly easy to track my food intake and monitor my daily calorie goals. The extensive database of food items,ensures everything. Highly recommended!"
          </p>
         
        </div>
        <div class="testimonial-box">
          <div class="customer-detail">
            <div class="customer-photo">
              <img
                src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-collection-image-icon-stock-isolated-object-set-symbol-web-137160339.jpg"
                alt=""
              />
              <p class="customer-name">Dubey Priyanshu</p>
            </div>
          </div>
          <div class="star-rating">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
          </div>
          <p class="testimonial-text">
          "I've tried several fitness tracking apps, but MyFitnessPal stands out from the rest. The app's exercise tracking feature is fantastic, allowing me to log various activities and monitor my progress. The personalized recommendations have helped me optimize my workouts and achieve better results
          </p>
        </div>
      </div>
    </section>
        </div>
     );
}
 
export default Main;