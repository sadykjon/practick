import React from "react"
import Header from "../header/header"
import './home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <section id="section_history">
                <div class="section_img"></div>
                <div class="section_text">
                    <h2><span class="gradient">The History Of Our Hotel</span> </h2>
                    <p class="history_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nam aspernatur in,
                        quia illo accusamus itaque magni earum esse optio.</p>
                    <button class="btn">Read More</button>
                </div>

            </section>
            <section>
        <div class="container">
            <div class="section_block">
                <div class="mini_box1">
                    <i class="fa-solid fa-hotel fa-4x"></i>
                    <h2>Create Location</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quidem ad recusandae nobis ullam incidunt, perferendis ex veritatis impedit exercitationem.
                    </p>
                </div>
                <div class="mini_box2">
                    <i class="fa-solid fa-utensils fa-4x"></i>
                    <h2>Free Meal</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quidem ad recusandae nobis ullam incidunt, perferendis ex veritatis impedit exercitationem.
                    </p>
                </div>
                <div class="mini_box3">
                    <i class="fa-solid fa-dumbbell fa-4x"></i>
                    <h2>Fitnes room</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quidem ad recusandae nobis ullam incidunt, perferendis ex veritatis impedit exercitationem.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <footer >
<h1>
  bnghdjythfgvmhgvmjhvfgh
</h1>
    </footer>

        </div>
        

    )
}
export default Home