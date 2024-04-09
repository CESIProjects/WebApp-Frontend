<!-- Dialog.vue -->
<template>
  <div :class="{ 'dialog active': visible }">
    <h2>Ajouter un post</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="title">Titre:</label>
        <input
          type="text"
          id="title"
          v-model="title"
          required
          class="text-black"
        />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea
          id="description"
          v-model="description"
          required
          class="text-black"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="category">Catégorie:</label>
        <select id="category" v-model="category" required class="text-black">
          <option value="">Choisir une catégorie</option>
          <option value="cat1">Catégorie 1</option>
          <option value="cat2">Catégorie 2</option>
        </select>
      </div>
      <button type="submit" @click="submitForm">Ajouter</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      visible: false,
      title: "",
      description: "",
      category: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        // Obtenir la date de publication actuelle au format ISO 8601
        const publicationDate = new Date().toISOString();

        // Construction de l'objet à envoyer dans la requête POST
        const postData = {
          title: this.title,
          content: this.description,
          publicationDate: publicationDate,
          popular: true, // Vous devez déterminer comment définir cette valeur
          userId: 0, // Vous devez déterminer comment obtenir l'ID de l'utilisateur
          categoryId: 0, // Vous devez déterminer comment obtenir l'ID de la catégorie
        };

        // Effectuer la requête POST avec Axios
        const response = await axios.post(
          "http://localhost:8080/api/posts",
          postData
        );

        // Vérifier si la requête a réussi (statut HTTP 2xx)
        if (response.status === 200 || response.status === 201) {
          // Afficher un message de succès ou effectuer d'autres actions nécessaires
          console.log("Publication réussie !");

          // Émettre un événement pour indiquer que la publication est réussie
          this.$emit("post-success");

          // Cacher le dialogue après la soumission
          this.visible = false;
        } else {
          // Si la requête a échoué, afficher un message d'erreur ou effectuer d'autres actions nécessaires
          console.error("Échec de la publication.");
        }
      } catch (error) {
        console.error("Erreur lors de la publication :", error);
      }
    },
  },
};
</script>

<style scoped>
.dialog {
  display: none;
  /* Styles pour votre dialogue */
}
.dialog.active {
  display: block;
  /* Styles pour votre dialogue visible */
}
.dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Assurez-vous que la boîte de dialogue est au-dessus de tout le contenu */
}
.text-black {
  color: black; /* Définir la couleur du texte à noir */
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  font-weight: bold;
}
input,
textarea,
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
