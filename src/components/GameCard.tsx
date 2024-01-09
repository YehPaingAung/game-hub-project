import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { GameIconList } from "./GameIconList";
import { CriticScore } from "./CriticScore";
import { getCroppedImageUrl } from "../services/image-url";
import { Emoji } from "./Emoji";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <CardBody>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <HStack justifyContent="space-between" marginBottom={3}>
          <GameIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};
