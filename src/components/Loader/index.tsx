import { LoadingContainer, LoadingMessage, LoadingImage } from "./style";

const Loader = () => {
  return (
    <LoadingContainer>
      <LoadingMessage>Catching Pokémons...</LoadingMessage>
      <LoadingImage src="/assets/pokeball.png" />
    </LoadingContainer>
  );
};

export default Loader;
