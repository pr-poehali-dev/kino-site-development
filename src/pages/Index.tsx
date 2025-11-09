import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: string;
  image: string;
  isNew?: boolean;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const recommendedMovies: Movie[] = [
    { id: 1, title: 'Dune: Part Two', year: 2024, rating: 8.9, genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400', isNew: true },
    { id: 2, title: 'Oppenheimer', year: 2023, rating: 8.6, genre: 'Biography', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400' },
    { id: 3, title: 'The Batman', year: 2022, rating: 8.2, genre: 'Action', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400' },
    { id: 4, title: 'Everything Everywhere', year: 2022, rating: 8.1, genre: 'Adventure', image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400' },
  ];

  const movies: Movie[] = [
    { id: 5, title: 'Interstellar', year: 2014, rating: 8.7, genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400' },
    { id: 6, title: 'The Dark Knight', year: 2008, rating: 9.0, genre: 'Action', image: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400' },
    { id: 7, title: 'Inception', year: 2010, rating: 8.8, genre: 'Thriller', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400' },
    { id: 8, title: 'Parasite', year: 2019, rating: 8.5, genre: 'Thriller', image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400' },
    { id: 9, title: 'The Shawshank', year: 1994, rating: 9.3, genre: 'Drama', image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400' },
    { id: 10, title: 'Pulp Fiction', year: 1994, rating: 8.9, genre: 'Crime', image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400' },
  ];

  const series: Movie[] = [
    { id: 11, title: 'Breaking Bad', year: 2008, rating: 9.5, genre: 'Drama', image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400' },
    { id: 12, title: 'The Last of Us', year: 2023, rating: 8.8, genre: 'Drama', image: 'https://images.unsplash.com/photo-1574267432644-f610fa73db1e?w=400', isNew: true },
    { id: 13, title: 'Stranger Things', year: 2016, rating: 8.7, genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1574267432553-a8d8c11ae939?w=400' },
    { id: 14, title: 'The Crown', year: 2016, rating: 8.6, genre: 'Biography', image: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=400' },
  ];

  const MovieCard = ({ movie }: { movie: Movie }) => (
    <div className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in">
      <div className="aspect-[2/3] overflow-hidden">
        <img 
          src={movie.image} 
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {movie.isNew && (
        <Badge className="absolute top-3 right-3 bg-primary text-white border-0">
          Новинка
        </Badge>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold mb-1 text-white">{movie.title}</h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-300">{movie.year} • {movie.genre}</span>
          <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded-lg">
            <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-yellow-500 font-medium">{movie.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'all', label: 'Все', icon: 'Film' },
    { id: 'movies', label: 'Фильмы', icon: 'Video' },
    { id: 'series', label: 'Сериалы', icon: 'Tv' },
    { id: 'new', label: 'Новинки', icon: 'Sparkles' },
  ];

  return (
    <div className="min-h-screen pb-20">
      <header className="sticky top-0 z-50 glass border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">CineStream</h1>
            
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-6">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      activeTab === tab.id 
                        ? 'text-primary font-medium' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Icon name={tab.icon as any} size={18} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Icon name="Search" size={20} />
                </Button>
                <Avatar className="h-10 w-10 ring-2 ring-primary/30">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                  <AvatarFallback>US</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 pt-12">
        <section className="mb-16 animate-slide-up">
          <div className="relative rounded-3xl overflow-hidden glass-card p-12 h-[500px] flex items-end">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Рекомендовано для вас
              </Badge>
              <h2 className="text-6xl font-bold mb-4">Dune: Part Two</h2>
              <p className="text-lg text-gray-300 mb-6">
                Пол Атрейдес объединяется с Чани и фрименами, чтобы отомстить заговорщикам, 
                уничтожившим его семью. Столкнувшись с выбором между любовью и судьбой вселенной...
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                  <Icon name="Play" size={20} />
                  Смотреть
                </Button>
                <Button size="lg" variant="outline" className="glass border-white/20 text-white hover:bg-white/10 gap-2">
                  <Icon name="Plus" size={20} />
                  В список
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Персональные рекомендации</h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Все рекомендации
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recommendedMovies.map((movie, idx) => (
              <div key={movie.id} style={{ animationDelay: `${idx * 100}ms` }}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Популярные фильмы</h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Смотреть всё
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {movies.slice(0, 5).map((movie, idx) => (
              <div key={movie.id} style={{ animationDelay: `${idx * 100}ms` }}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Топ сериалы</h2>
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Все сериалы
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {series.map((serie, idx) => (
              <div key={serie.id} style={{ animationDelay: `${idx * 100}ms` }}>
                <MovieCard movie={serie} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="glass border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-400">© 2024 CineStream. Все права защищены.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Поддержка</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Условия</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
