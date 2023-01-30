import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeader from "../../common/section-header/section-header";
import carImage from "../../../../assets/img/about/best-offer.png";
import OfferItem from "./offer-item";
import {
  FaCarAlt,
  FaBriefcase,
  FaCarSide,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { RiCarWashingFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import "./best-offers.scss"

const BestOffers = () => {
  return (
    <div className="best-offers">
      <SectionHeader title1="Get Our" title2="Best Offers" />

      <div className="offers">
        <Container>
          <Row className="gy-4">
            <Col lg={4}>
              <OfferItem
                icon={<FaCarAlt />}
                title="Featured Luxury Cars"
                desc="Luxury cars offer a premium driving experience, with refined styling, advanced technology, and exceptional comfort.From hand-stitched leather interiors and customizable cabin options to advanced driver-assist systems and cutting-edge infotainment, luxury cars offer a driving experience unlike any other."
              />
              <OfferItem
                icon={<FaBriefcase />}
                title="Insurance Included"
                desc="Whether you're driving your own luxury car or renting one for a special occasion, insurance coverage can provide you with the confidence and security you need to enjoy the ultimate driving experience."
              />
              <OfferItem
                icon={<FaCarSide />}
                title="Available 12 640 Cars"
                desc="With over 12,640 luxury cars available, there's a wide range of options to choose from to suit your personal preferences and driving needs. From classic models to cutting-edge designs, these cars are known for their sophisticated styling, advanced technology, and exceptional performance."
              />
            </Col>
            <Col lg={4}>
              <img src={carImage} alt="" className="img-fluid" />
            </Col>
            <Col lg={4}>
            <OfferItem
                icon={<FaMapMarkerAlt />}
                title="Any Locations Rent"
                direction="right"
                desc="Luxury cars offer a premium driving experience, with refined styling, advanced technology, and exceptional comfort.From hand-stitched leather interiors and customizable cabin options to advanced driver-assist systems and cutting-edge infotainment, luxury cars offer a driving experience unlike any other."
              />
              <OfferItem
                icon={<RiCarWashingFill />}
                title="Cleaning Included"
                direction="right"
                desc="Whether you're driving your own luxury car or renting one for a special occasion, insurance coverage can provide you with the confidence and security you need to enjoy the ultimate driving experience."
              />
              <OfferItem
                icon={<MdOutlineSupportAgent />}
                title="Online 24 / 7 Support"
                direction="right"
                desc="With over 12,640 luxury cars available, there's a wide range of options to choose from to suit your personal preferences and driving needs. From classic models to cutting-edge designs, these cars are known for their sophisticated styling, advanced technology, and exceptional performance."
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BestOffers;
