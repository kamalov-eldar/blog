import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export const usersAPI = {
  async getUsers() {
    const response = await instance.get("users");
    // console.log("response-Users: ", response);
    return response.data;
  },
};

export const postsAPI = {
  async getPosts() {
    const response = await instance.get("posts");
    // console.log("response-Posts: ", response);
    return response.data;
  },

  async postComment(postId, valuesForm) {
    const response = await instance.post(`posts/${postId}/comments`, {
      name: valuesForm.name,
      email: valuesForm.email,
      body: valuesForm.comment,
    });
   // console.log("response-postComment: ", response);
    return response.data;
  },
};

// https://jsonplaceholder.typicode.com/posts/1/comments
export const commentsAPI = {
  async getComments(postId) {
    const response = await instance.get(`posts/${postId}/comments`);
    // console.log("response-Comments: ", response);
    return response.data;
  },
};
