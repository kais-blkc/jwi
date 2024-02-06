import './styles.scss';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '@/6_shared/ui/Loading';
import { FilmHero } from '@/3_widgets/FilmDetail';
import { peopleApi } from '@/3_widgets/PeopleDetail';
import { Characteristic } from '@/6_shared/ui/Сharacteristic';
import { FilmImgs } from '@/3_widgets/FilmDetail';
import { EQueryTypes } from '@/3_widgets/TvDetail/model/movieTypes';
import { EImgTypes } from '@/6_shared/config';
import { FilmsRow } from '@/3_widgets/FilmDetail';
import { getCurrentOld } from '@/6_shared/lib/getCurrentOld';

type TSinglePersonParams = {
  id: string;
};

export const SinglePerson: FC = () => {
  const params = useParams<TSinglePersonParams>();
  if (!params.id) return;

  const { data: person, isLoading } = peopleApi.useGetPersonByIdQuery(
    +params.id
  );
  const { data: films } = peopleApi.useGetPersonFilmsByIdQuery(+params.id);

  const birthyear =
    person?.birthday != null ? person?.birthday.split('-')[0] : false;
  const currentOld = birthyear ? getCurrentOld(+birthyear) : '';
  const notInfo = 'Неизвестно';

  return (
    <>
      {isLoading && <Loading />}

      {person && (
        <div className='single-person pb-35-sections'>
          <FilmHero
            id={+params.id}
            title={person.name}
            overview={''}
            poster={person.profile_path}
            bg={person.profile_path}
          >
            <Characteristic
              title='Возраст'
              text={currentOld || notInfo}
            />
            <Characteristic
              title='День рождения'
              text={person.birthday || notInfo}
            />
            <Characteristic
              title='День смерти'
              text={person.deathday || 'Пока что с нами'}
            />
            <Characteristic
              title='Место рождения'
              text={person.place_of_birth || 'Вообще не в курсах'}
            />
          </FilmHero>

          <section className='biography'>
            <div className='container'>
              <h2 className='h2'>Биография</h2>
              <p>{person.biography}</p>
            </div>
          </section>

          <FilmImgs
            queryArgs={{ movieType: EQueryTypes.person, filmId: +params.id }}
            imgListArgsArr={[
              { title: 'Фотографии', imgType: EImgTypes.profiles },
            ]}
          />

          {films && (
            <FilmsRow
              list={films}
              movieType={EQueryTypes.movie}
              title='Фильмы'
              rowSlider={false}
            />
          )}
        </div>
      )}
    </>
  );
};
