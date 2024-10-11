import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { congViecService } from "../../services/congViec.service";

const DeTailsJobs = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  console.log(searchParam.get("deTail"));
  const { id } = useParams();
  const [listJob, setListJob] = useState([]);

  //
  useEffect(() => {
    let idCongViec = searchParam.get("deTail");
    console.log(idCongViec);
    congViecService
      .detailJob(idCongViec)
      .then((res) => {
        console.log(res);
        setListJob(res.data.content);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  return <div>DeTailsJobs</div>;
};

export default DeTailsJobs;
