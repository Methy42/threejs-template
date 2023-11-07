import { EventDispatcher } from "three";
import { loadAsync } from "../loaders/TextureLoader";

//#region 首页的资源
const SimpleButtonImage = "https://methy.net:10233/images/simple_button.png";
const DifficultyButtonImage = "https://methy.net:10233/images/difficulty_button.png";
const PersonalButtonImage = "https://methy.net:10233/images/personal_button.png";
const CommunityButtonImage = "https://methy.net:10233/images/community_button.png";

const NoticeTipImage = "https://methy.net:10233/images/notice_tip.png";
const SettingsTipImage = "https://methy.net:10233/images/settings_tip.png";
const TiliTipImage = "https://methy.net:10233/images/tili_tip.png";
const TiliBubbleImage = "https://methy.net:10233/images/tili_bubble.png";

const HomeImage = "https://methy.net:10233/images/home.png";
const SkateImage = "https://methy.net:10233/images/skate.png";
//#endregion

//#region 菜单页面的资源
const BackIconImage = "https://methy.net:10233/images/back.png";

const LevelBorderImage = "https://methy.net:10233/images/level_border.png"
const LevelBorderBackImage = "https://methy.net:10233/images/level_border_back.png"

const LevelName0Image = "https://methy.net:10233/images/level_images/name_0.png";
const LevelImage0Image = "https://methy.net:10233/images/level_images/0.gif";

const LevelName1Image = "https://methy.net:10233/images/level_images/name_1.png";
const LevelImage1Image = "https://methy.net:10233/images/level_images/1.gif";

const LevelName2Image = "https://methy.net:10233/images/level_images/name_2.png";
const LevelImage2Image = "https://methy.net:10233/images/level_images/2.gif";
//#endregion

//#region 通用的资源
const BasicBackgroundImage = "https://methy.net:10233/images/start_background.jpg";

class InitAssetsStore extends EventDispatcher<{
    process: {
        process: number;
    };
}> {
    public assetsMap: { [name: string]: {
        url: string;
        type: "image";
        image?: THREE.Texture;
    } } = {
        simpleButton: {
            url: SimpleButtonImage,
            type: "image"
        },
        difficultyButton: {
            url: DifficultyButtonImage,
            type: "image"
        },
        communityButton: {
            url: CommunityButtonImage,
            type: "image"
        },
        hersonalButton: {
            url: PersonalButtonImage,
            type: "image"
        },
        noticeTip: {
            url: NoticeTipImage,
            type: "image"
        },
        settingsTip: {
            url: SettingsTipImage,
            type: "image"
        },
        tiliTip: {
            url: TiliTipImage,
            type: "image"
        },
        tiliBubble: {
            url: TiliBubbleImage,
            type: "image"
        },
        homeBadge: {
            url: HomeImage,
            type: "image"
        },
        skateBadge: {
            url: SkateImage,
            type: "image"
        },
        backIcon: {
            url: BackIconImage,
            type: "image"
        },
        levelBorder: {
            url: LevelBorderImage,
            type: "image"
        },
        levelBorderBack: {
            url: LevelBorderBackImage,
            type: "image"
        },
        levelName0: {
            url: LevelName0Image,
            type: "image"
        },
        levelImage0: {
            url: LevelImage0Image,
            type: "image"
        },
        levelName1: {
            url: LevelName1Image,
            type: "image"
        },
        levelImage1: {
            url: LevelImage1Image,
            type: "image"
        },
        levelName2: {
            url: LevelName2Image,
            type: "image"
        },
        levelImage2: {
            url: LevelImage2Image,
            type: "image"
        },
        basicBackground: {
            url: BasicBackgroundImage,
            type: "image"
        }
    };

    public loadAsync = async (canvas: HTMLCanvasElement) => {
        const assetsLoadList = Object.values(this.assetsMap);

        for (let i = 0; i < assetsLoadList.length; i++) {
            console.log("loading", assetsLoadList[i]);
            if (assetsLoadList[i].type === "image") {
                assetsLoadList[i].image = await loadAsync(assetsLoadList[i].url);
            }
            this.dispatchEvent({ type: "process", process: Math.floor(i / assetsLoadList.length * 100) });
        }
    };
}

export const initAssetsStore = new InitAssetsStore();