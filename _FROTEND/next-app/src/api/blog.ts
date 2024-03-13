"use client";

import axios from "axios";

const access_token = "-f12xcKuDbBv6x6G5hwM31aSvbjyY1Bf9mi2ziPX3po";
const space_id = "bhq020fgexc2";
const content_type = "blog";

export function getDataBlog() {
  return axios.get(
    `https://cdn.contentful.com/spaces/${space_id}/environments/master/entries?access_token=${access_token}&content_type=${content_type}`
  );
}

export function getDetailDataBlog(id: string) {
  return axios.get(
    `https://cdn.contentful.com/spaces/${space_id}/environments/master/entries/${id}?access_token=${access_token}`
  );
}

export function getImage(id: string) {
  return axios.get(
    `https://cdn.contentful.com/spaces/${space_id}/environments/master/assets/${id}?access_token=${access_token}`
  );
}
