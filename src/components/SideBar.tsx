import { GenreResponseProps } from '../App';
import { Button } from './Button';
import '../styles/sidebar.scss';

interface ISidebarProps {
  handleClickButton: (id: number) => void;
  genres: GenreResponseProps[];
  selectedGenreId: number;
}

export function SideBar({ handleClickButton, genres, selectedGenreId }: ISidebarProps) {
  return (
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  );
}