import Axis from "@components/Axis";
import { card } from "@components/Card";
import { button } from '@components/Button/button';
import { styles, svg } from '@styles';
import thumb1 from "@public/travel/destinations/thumb1.jpg"
import thumb2 from "@public/travel/destinations/thumb2.jpg"
import thumb3 from "@public/travel/destinations/thumb3.jpg"


function Destinations(props) {
    return (
        <article>
            <hgroup>
                <p>Top Selling</p>
                <h2>Top Destinations</h2>
            </hgroup>
            <img src="/travel/services/bg-item4.png"/>

            <Axis xs={[[314, 0], [2,2]]} md={[[1160, 4, 5, 1], [314, 0, 2, 1]]}>
                <>
                    <card.normal src={thumb1} width={314}>
                        <hgroup className="flex justify-between py-1 px-3">
                            <h4>Rome, Italty</h4>
                            <h5>$5,42k</h5>
                        </hgroup>
                        <button.normal icon={svg.arrow}>10 Days Trip</button.normal>
                    </card.normal>
                </>
                <>
                    <card.normal src={thumb2} width={314}>
                        <hgroup className="flex">
                                <h4>London, UK</h4>
                                <h5>$5,42k</h5>
                        </hgroup>
                        <button.normal icon={svg.arrow}>10 Days Trip</button.normal>
                    </card.normal>
                </>
                <>
                    <card.normal src={thumb3} width={314}>
                        <hgroup className="flex">
                                <h4>Full Europe</h4>
                                <h5>$5,42k</h5>
                        </hgroup>
                        <button.normal icon={svg.arrow}>10 Days Trip</button.normal>
                    </card.normal>
                </>
            </Axis>
        </article>
    )
}

export default Destinations;