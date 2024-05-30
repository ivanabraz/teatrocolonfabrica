import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ListView from '../ListView/ListView';
import ButtonListView from '../ButtonListView/ButtonListView';
import ButtonFilters from '../ButtonFilters/ButtonFilters';
import FiltersDesktop from '../FiltersDesktop/FiltersDesktop';
import FiltersSort from '../FiltersSort/FiltersSort';
import FiltersMobile from '../FiltersMobile/FiltersMobile';

const ItemList = () => {
    const { t, i18n } = useTranslation();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [isGridView, setIsGridView] = useState(true);
    const [selectedFilters, setSelectedFilters] = useState({
        category: [],
    });
    const [section, setSection] = useState([]);
    const [dynamicFilters, setDynamicFilters] = useState([]);

    const sortOptions = [
        { name: t('global.newest'), value: 'position', current: true },
        { name: t('global.alphabetically_az'), value: 'title_asc', current: false },
        { name: t('global.alphabetically_za'), value: 'title_desc', current: false },
    ]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/locales/${i18n.language}/global.json`);
                const data = await response.json();
                const balletProductions = data.productions.ballet.map(item => ({ ...item, category: 'ballet' }));
                const operaProductions = data.productions.opera.map(item => ({ ...item, category: 'opera' }));
                const mergedProductions = [...operaProductions, ...balletProductions];
                
                mergedProductions.sort((a, b) => a.position - b.position);
                
                const uniqueCategories = [...new Set(mergedProductions.map(item => item.category))];
                const newDynamicFilters = [
                    {
                        id: 'category',
                        name: `${t('global.category')}`,
                        options: uniqueCategories.map(category => ({
                            value: category,
                            label: category === 'ballet' ? t('global.ballet') : t('global.opera'),
                            checked: selectedFilters['category']?.includes(category) || false,
                        })),
                    },
                ];
                setSection(mergedProductions);
                setDynamicFilters(newDynamicFilters);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [t, i18n.language, selectedFilters]);
    

    const filteredItems = section.filter(item => {
        const categoryFilterValues = selectedFilters['category'] || [];
        return categoryFilterValues.length === 0 || categoryFilterValues.includes(item.category);
    });

    return (
        <div className="bg-white">
            <FiltersMobile 
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
            dynamicFilters={dynamicFilters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
        />
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-neutral-200 pb-6 pt-24">
                    <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
                        {t('global.exhibitions')}
                    </h1>
                    <div className="flex items-center">
                        <FiltersSort sortOptions={sortOptions} section={section} setSection={setSection} />
                        <ButtonListView isGridView={isGridView} setIsGridView={setIsGridView}/>
                        <ButtonFilters setMobileFiltersOpen={setMobileFiltersOpen}/>
                    </div>
                </div>
                <FiltersDesktop dynamicFilters={dynamicFilters} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}>
                    <ListView filteredItems={filteredItems} setSelectedFilters={setSelectedFilters} isGridView={isGridView} i18n={i18n}/>
                </FiltersDesktop>
            </main>
        </div>
    )
}

export default ItemList;
