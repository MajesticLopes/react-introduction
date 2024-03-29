import { MenuListItem } from "../MenuListItem/MenuListenItem";
import s from "./style.module.css";
import { DIFFICULTIES } from "./constant";
export function MenuList({ difficulty, onItemClick }) {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((diff) => (
        <MenuListItem
          onClick={onItemClick}
          difficulty={diff}
          isSelected={difficulty === diff}
        />
      ))}
    </div>
  );
}
