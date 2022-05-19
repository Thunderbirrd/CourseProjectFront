import React, { useState, useEffect } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import MobileSearchBar from "../../components/MobileSearchBar/MobileSearchBar";
import UserCard from "../../components/UserCard/UserCard";
import SkeletonJob from "../../skeletons/SkeletonJob";
import Container from "../../components/Container/Container";
import GridContainer from "../../components/GridContainer/GridContainer";
import Button from "../../components/Button/Button";


const HomePage = ({
  users,
  isLoading,
  windowWidth,
  setCurrentUser, usersVisible,
  showMoreUsers,
}) => {

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [isElectrician, setIsElectrician] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setIsElectrician(!isElectrician);
  };


  const handleLocationInputChange = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let filteredItems

    if (isChecked) {
      filteredItems = users.filter(
          (job) =>
              job.service_type === "Electrician"

      );
    } else {
      filteredItems = users.filter(
          (user) =>
              user.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }
    setFilteredUsers(filteredItems);
  };

  return (
    <Container>
      {/* if the screen width is tablet size or larger, show searchbar, anything less, show mobile searchbar */}
      {windowWidth >= 768 ? (
        <SearchBar
          isChecked={isChecked}
          onCheckboxChange={handleCheckboxChange}
          isElectrician={isElectrician}
          onFormSubmit={handleFormSubmit}
          searchLocation={searchLocation}
          onLocationInputChange={handleLocationInputChange}
        />
      ) : (
        <MobileSearchBar
          isChecked={isChecked}
          onCheckboxChange={handleCheckboxChange}
          isElectrician={isElectrician}
          onFormSubmit={handleFormSubmit}
          searchLocation={searchLocation}
          onLocationInputChange={handleLocationInputChange}
        />
      )}
      <GridContainer>
        {filteredUsers.length > 0
          ? filteredUsers
              .slice(0, usersVisible)
              .map((user) => (
                <UserCard key={user.id} user={user} setCurrentUser={setCurrentUser} />
              ))
          : users.map((user) => (
              <UserCard key={user.id} user={user} setCurrentUser={setCurrentUser} />
            ))}
        {isLoading && <SkeletonJob />}
      </GridContainer>
      <div className="load-more">
        <Button onClick={showMoreUsers} buttonStyle={"btn--primary"}>
          Load More
        </Button>
      </div>
    </Container>
  );
};

export default HomePage;
