import axios from "axios"
import apiHelpers from "./apiHelpers"


const StoryAPI = {}
const BASE_URL = "http://localhost:8000"


// authentication API methods

StoryAPI.signup = async (signupData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/users/`, signupData, apiHelpers.getCsrfConfig()))
}


StoryAPI.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/login/`, loginData, apiHelpers.getCsrfConfig()))
}

StoryAPI.logout = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/logout/`, null, apiHelpers.getCsrfConfig()))
}


// story making API methods

StoryAPI.getAllStories = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/create-story/`, apiHelpers.getCsrfConfig()))
}

StoryAPI.getStoryBySearch = async (searchStories) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/stories/?search=${searchStories}`, apiHelpers.getCsrfConfig()))
}

StoryAPI.updateStory = async (storyId, data) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.patch(`${BASE_URL}/create-story/${storyId}/`, data, apiHelpers.getCsrfConfig()))
}

StoryAPI.postStory = async (storiesData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/create-story/`, storiesData, apiHelpers.getCsrfConfig()))
}

StoryAPI.postImage = async (imageData) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.post(`${BASE_URL}/images/`, imageData, apiHelpers.getCsrfConfig()))
}

StoryAPI.getAllImages = async () => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/images/`, apiHelpers.getCsrfConfig()))
}

StoryAPI.getImageById = async (imageId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/images/${imageId}`, apiHelpers.getCsrfConfig()))
}

StoryAPI.getStoryById = async (storyId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.get(`${BASE_URL}/create-story/${storyId}/`, apiHelpers.getCsrfConfig()))
}


StoryAPI.deleteStoryById = async (StoryId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.delete(`${BASE_URL}/create-story/${StoryId}/`, apiHelpers.getCsrfConfig()))
}

StoryAPI.deleteImageById = async (ImageId) => {
  return await apiHelpers.tryCatchFetch(
    () => axios.delete(`${BASE_URL}/images/${ImageId}/`, apiHelpers.getCsrfConfig()))
}

export default StoryAPI


// GET to the list view       => get all
// POST to the list view      => create new
// GET to the detail view     => get one
// PUT to the detail view     => update one
// PATCH to the detail view   => partial update one
// DELETE to the detail view  => delete one