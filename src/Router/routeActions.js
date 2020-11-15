export const goBack = (history) => {
    history.goBack();
  };

export const goToPokeDetailPage = (history, id) => {
    history.push(`/poke-detail/${id}`);
  };
  