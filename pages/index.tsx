import type { NextPage } from "next";
import { Text } from "@nextui-org/react";
import megaten from "megaten";
import { Pagination } from "@nextui-org/react";
import { useState } from "react";
import { Grid } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useQuery } from "react-query";
import axios from "axios";

const Home: NextPage = () => {
  const { demons, skills } = megaten;
  const [totalPerPage, setTotalPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(
    Math.round(demons.length / 20 + 1)
  );

  const { data, isLoading, isError } = useQuery("demons", () =>
    axios.get("/api").then((res) => console.log(res.data))
  );


  return (
    <>
      <Grid.Container gap={2} justify="center">
        {demons &&
          demons
            .slice((currentPage - 1) * totalPerPage, currentPage * totalPerPage)
            .map((demon) => (
              <Grid xs={12} sm={6} md={4} lg={3} key={demon.name}>
                <Text>{demon.name}</Text>
              </Grid>
            ))}
      </Grid.Container>
      <Pagination
        total={totalPages}
        page={currentPage}
        onChange={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </>
  );
};

export default Home;
