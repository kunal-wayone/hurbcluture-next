const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export interface ProductData {
  result: {
    _id: string;
    name: string;
    description: string;
    coverImage: string;
    deletedAt: string | null;
    createdAt: string;
    updatedAt: string;
  }[];
}
export interface SubContent {
  title: string;
  description: string;
  _id?: string;
}

export interface ISection {
  title: string;
  subtitle: string;
  description: string;
  subContents: SubContent[];
  deletedAt: null | string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  image1?: string;
  image2?: string;
}

export interface IPageResponse {
  title: string;
  subTitle: string;
  description: string;
  section1?: ISection;
  section2?: ISection;
  section3?: ISection;
  section4?: ISection;
  section5?: ISection;
  section6?: ISection;
  section7?: ISection;
  section8?: ISection;
  deletedAt: null | string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  videoUrl: string;
}

export interface Content {
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  icon: string;
  video: string;
  date?: string;
  _id: string;
}

export interface SectionData {
  title: string;
  subTitle: string;
  description: string;
  coverImage: string;
  videoUrl: string;
  link?: string;
  contents: Content[];
}

// Interface section wise

export interface SectionContent {
  _id?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  icon?: string;
  video?: string;
  link?: string;
  deletedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface SectionResponse {
  _id: string;
  title: string;
  subTitle: string;
  description: string;
  coverImage: string;
  videoUrl: string;
  slug: string;
  link: string;
  contents: SectionContent[] | undefined;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

// End section interface

export const getData = async (url: string) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error("Failed to fetch section data");
    }
    const res = await response.json();
    return res.data.result;
  } catch (error) {
    console.error("Error fetching section data:", error);
    return null;
  }
};

export const getHomeData = async () => {
  const homePageData: SectionResponse[] = await getData(
    "/api/section?slug=home"
  );

  if (homePageData && homePageData?.length === 0) return { loading: false };

  const loading = homePageData?.length !== 0 ? true : false;
  return {
    loading,
    homePageData,
  };
};

export const getAboutData = async () => {
  const aboutPageData: SectionResponse[] = await getData(
    "/api/section?slug=about"
  );

  if (aboutPageData && aboutPageData?.length === 0) return { loading: false };

  const loading = aboutPageData?.length !== 0 ? true : false;
  return {
    loading,
    aboutPageData,
  };
};

export const getServiceData = async () => {
  const servicePageData: SectionResponse[] = await getData(
    "/api/section?slug=service"
  );

  if (servicePageData && servicePageData?.length === 0)
    return { loading: false };

  const loading = servicePageData?.length !== 0 ? true : false;
  return {
    loading,
    servicePageData,
  };
};

export const getTechnologyData = async () => {
  const technologyPageData: SectionResponse[] = await getData(
    "/api/section?slug=technology"
  );

  if (technologyPageData && technologyPageData?.length === 0)
    return { loading: false };

  const loading = technologyPageData?.length !== 0 ? true : false;
  return {
    loading,
    technologyPageData,
  };
};

export const getCareerData = async () => {
  const careerPageData: SectionResponse[] = await getData(
    "/api/section?slug=career"
  );
  if (careerPageData.length === 0) return { loading: false };

  const {
    title,
    subTitle,
    description,
    videoUrl,
    slug,
    link,
    coverImage,
    contents,
  } = careerPageData[0];
  const loading = careerPageData?.length !== 0 ? true : false;
  return {
    loading,
    title,
    subTitle,
    description,
    videoUrl,
    slug,
    link,
    coverImage,
    contents,
    careerPageData,
  };
};
export const getApplicationData = async () => {
  const applicationPageData: SectionResponse[] = await getData(
    "/api/section?slug=application"
  );

  if (applicationPageData && applicationPageData?.length === 0)
    return { loading: false };

  const loading = applicationPageData?.length !== 0 ? true : false;
  return {
    loading,
    applicationPageData,
  };
};

export const getContactUsData = async () => {
  const careerPageData: SectionResponse[] = await getData(
    "/api/section?slug=contact"
  );
  if (careerPageData.length === 0) return { loading: false };

  const {
    title,
    subTitle,
    description,
    videoUrl,
    slug,
    link,
    coverImage,
    contents,
  } = careerPageData[0];
  const loading = careerPageData?.length !== 0 ? true : false;
  return {
    loading,
    title,
    subTitle,
    description,
    videoUrl,
    slug,
    link,
    coverImage,
    contents,
    careerPageData,
  };
};

export const getBlogData = async () => {
  const blogPageData: any[] = await getData("/api/section?slug=blog");
  if (blogPageData.length === 0) return { loading: false };

  const loading = blogPageData.length === 0 ? false : true;
  return {
    loading,
    blogPageData,
  };
};

export const getBlogsListData = async () => {
  const blogListPage: any[] = await getData("/api/blog");
  if (blogListPage.length === 0) return { loading: false };

  const loadingListData = blogListPage.length === 0 ? false : true;
  return {
    loadingListData,
    blogListPage,
  };
};

export const getBlogSlugData = async (slug: any) => {
  const blogPageSlugData: any[] = await getData(`/api/blog?slug=${slug}`);
  if (blogPageSlugData.length === 0) return { loading: false };

  const loading = blogPageSlugData.length === 0 ? false : true;
  return {
    loading,
    blogPageSlugData,
  };
};

export const getNewsListData = async () => {
  const newsListPage: any[] = await getData("/api/news");
  if (newsListPage.length === 0) return { loading: false };
console.log(newsListPage)
  const loadingListData = newsListPage.length === 0 ? false : true;
  return {
    loadingListData,
    newsListPage,
  };
};



export const getNewsSlugData = async (slug: any) => {
  const newsPageSlugData: any[] = await getData(`/api/news?slug=${slug}`);
  if (newsPageSlugData.length === 0) return { loading: false };

  const loading = newsPageSlugData.length === 0 ? false : true;
  return {
    loading,
    newsPageSlugData,
  };
};