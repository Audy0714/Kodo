-- Deploy kodo-ecolo:insert to pg

BEGIN;

INSERT INTO "level"
    ("name")
VALUES
    ('easy'),
    ('medium'),
    ('hard');

INSERT INTO answer
    ("description", level_id)
VALUES
    ('a. Eteignez automatiquement', 3),
    ('b. Eteignez mais l''oublier souvent', 2),
    ('c. La laisser allumer...ça vous rassure', 1),
    ('a. Un peu de tout : de l''ancien, de l''occaz, du neuf', 2),
    ('b. Pas mal de pièces d''occasion, chinés sur des sites de vente de seconde main ou des vides-greniers', 3),
    ('c. Des hauts, des bas, des accessoires, des chaussures. Pourquoi ?', 1),
    ('a. Vous consommez, comme tout le monde : c''est indispensable pour faire fonctionner  la société et pour produire des richesses', 1),
    ('b. Vous faites attention à dépenser moins et mieux. Vous choississez par exemple des produits issus du commerce équitable et vous faites de bonnes affaires sur Internet', 3),
    ('c. Vous limitez vos achats, avant tout pour faire des économies. Mais vous vous offrez aussi de petits plaisirs (vêtements, loisirs). C''est votre liberté', 2),
    ('a. Je prends des douches courtes, et j''en profite même pour faire pipi dedans', 3),
    ('b. Pipi sous la douche ?  Beurk. Il y a des gens qui font ça ? Pas moi', 2),
    ('c. Je prends surtout des bains, plus relaxant', 1),
    ('a. J''apporte mon propre mug au travail et je n''achète jamais de vaisselle jetable, même lorsque j''organise une fête', 2),
    ('b. Je préfère culpabiliser un peu que de faire la vaisselle. Il faut avouer que le jetable, c''est ce qu''il y a de plus pratique', 1),
    ('c. Je n''achète même plus d''eau en bouteille, alors ne comptez pas sur moi pour utiliser ne serait-ce qu''un gobelet', 3),
    ('a. De temps en temps, mais ce n’est pas votre priorité', 2),
    ('b. Régulièrement, c’est tellement savoureux et bon pour la santé!', 3),
    ('c. Beurk', 1),
    ('a. Que des produits fait maison', 3),
    ('b. Ce que vous trouvez en grande surface', 1),
    ('c. De la grande surface... mais j’essaie de prendre des choses écolo', 2),
    ('a. Je fais au mieux. Même si je doute un peu sur les cartons de pizza graisseux et les mouchoirs usagés. Cela va où, déjà ?', 2),
    ('b. Honnêtement, pour que tout soit mélangé dans le camion poubelle, je préfère ne pas m''embêter', 1),
    ('c. Je trie, mais, surtout, je garde mes déchets alimentaires pour faire du compost', 3),
    ('a. La voiture ! et Électrique s’il vous plait !', 3),
    ('b. La voiture de temps en temps, mais quand je peux : les transports en commun ou la marche !', 2),
    ('c. La voiture ? meilleure invention du monde ! je l’utilise même pour me rendre à 500m de chez moi !', 1),
    ('a. Oui je n’achète plus de bouteilles en plastique', 3),
    ('b. Je n’y ai jamais vraiment pensé', 1),
    ('c. J’y pense ! d’ailleurs j’en ai déjà une au bureau', 2);

INSERT INTO question
    ("statement", answer_id)
VALUES
    ('Q1 Lorsque vous quittez une pièce, la lumière, vous :', 1),
    ('Q1 Lorsque vous quittez une pièce, la lumière, vous :', 2),
    ('Q1 Lorsque vous quittez une pièce, la lumière, vous :', 3),
    ('Q2 Qu''y a t-il dans votre dressing ?', 1),
    ('Q2 Qu''y a t-il dans votre dressing ?', 2),
    ('Q2 Qu''y a t-il dans votre dressing ?', 3),
    ('Q3 Quel genre de consommateur êtes-vous ?', 1),
    ('Q3 Quel genre de consommateur êtes-vous ?', 2),
    ('Q3 Quel genre de consommateur êtes-vous ?', 3),
    ('Q4 Pour faire ma toilette :', 1),
    ('Q4 Pour faire ma toilette :', 2),
    ('Q4 Pour faire ma toilette :', 3),
    ('Q5 Pour boire mon café (ou ma bière) :', 1),
    ('Q5 Pour boire mon café (ou ma bière) :', 2),
    ('Q5 Pour boire mon café (ou ma bière) :', 3),
    ('Q6 Vous mangez bio :', 1),
    ('Q6 Vous mangez bio :', 2),
    ('Q6 Vous mangez bio :', 3),
    ('Q7 Pour nettoyer la maison, vous utilisez :', 1),
    ('Q7 Pour nettoyer la maison, vous utilisez :', 2),
    ('Q7 Pour nettoyer la maison, vous utilisez :', 3),
    ('Q8 Pour trier mes déchets :', 1),
    ('Q8 Pour trier mes déchets :', 2),
    ('Q8 Pour trier mes déchets :', 3),
    ('Q9 Votre moyen de transport :', 1),
    ('Q9 Votre moyen de transport :,', 2),
    ('Q9 Votre moyen de transport :', 3),
    ('Q10 Avez-vous déjà adopter la gourde ?', 1),
    ('Q10 Avez-vous déjà adopter la gourde ?', 2),
    ('Q10 Avez-vous déjà adopter la gourde ?', 3);

INSERT INTO challenge
    ("day", "description", level_id)
VALUES
    ('Jour 1', 'Installe le moteur de recherche ECOSIA', 1),
    ('Jour 2', 'Efface tes mails et désinscris toi des newsletters', 1),
    ('Jour 3', 'Aujourd''hui : pipi sous la douche !', 1),
    ('Jour 4', 'Ramasse un déchet dans la rue tous les jours à partir d’aujourd’hui', 1),
    ('Jour 5', 'Passe à la brosse à dent en bambou', 1),
    ('Jour 6', 'Utilise un sac réutilisable pour tes courses', 1),
    ('Jour 7', 'Passe au savon dur', 1),
    ('Jour 1', 'Achète une gourde en inox', 2),
    ('Jour 2', 'Affiche le calendrier des fruits et légumes de saison dans ta cuisine ou télécharge “fruits et légumes de saison” via l’appstore/playstore', 2),
    ('Jour 3', 'N’utilise plus que des cotons démaquillant / des cotons tiges réutilisable', 2),
    ('Jour 4', 'Fabrique un tawashi', 2),
    ('Jour 5', 'L''ai-je mis cette année ? c’est le grand tri des vêtements ! Débarrasse toi de ce que tu ne mets plus pour leur donner une seconde vie', 2),
    ('Jour 6', 'Aujourd’hui : vélo ou transport en commun', 2),
    ('Jour 7', 'Mettre un `stop PUB` sur sa boite au lettre', 2),
    ('Jour 1', 'Ne pas consommer de viande cette semaine', 3),
    ('Jour 2', 'Passer une journée avec Greenpeace (ou la planifier)', 3),
    ('Jour 3', 'Faire le `FILL the bottle challenge` : remplir une bouteille entière de mégot', 3),
    ('Jour 4', 'Réaliser le trashtag challenge (nettoyer un endroit entier comme une fôret, une plage...)', 3),
    ('Jour 5', 'Arrêter les produits ménagers et réaliser un spray tout en 1', 3                                                                   ),
    ('Jour 6', 'Essayer l’application too good to go', 3),
    ('Jour 7', 'Faire les courses du jour en vrac (acheter que sans emballage ou emballage réduit) et ne pas utiliser de plastique toute la journée', 3);


INSERT INTO article
    (title, slug, "description", story, how, why, challenge_id)
VALUES
    ('L''application Ecosia', 
    'jour1-facile.jpg', 
    'Ecosia est un moteur de recherche 100% gratuit qui génère de l’argent grâce au publicité et qui reverse 80% de son profit à la plantation d’arbre dans le monde entier. Ecosia reste une bonne alternative au moteur de recherche “google”', 
    '10 secondes d''utilisation d''Ecosia suffisent pour générer les 0,28 € nécessaires pour planter un arbre',
    'Rend toi sur https://www.ecosia.org/ Click sur le bouton ‘ajouter à chrome’ accepter l’ajout de l’extension','Pourquoi utiliser ecosia ? Qui serait mieux placé que Ecosia  pour vous l’expliquer ? Rendez-vous sur https://fr.blog.ecosia.org/50-raisons-dutiliser-ecosia/', 1),
    ('La pollution numérique',
    'jour2-facile.jpg',
    'La pollution numérique consomme environ 10% de l''électricité mondiale. C’est avec des petits gestes quotidiens que nous pouvons réduire cet impact. Néanmoins ce n’est pas seulement l''utilisation de ces équipements qui pollue mais également leur production.',
    'Chaque heure sont envoyés 12 milliards d’emails, soit la production électrique de 18 centrales nucléaires pendant une heure. 80% d’entre eux ne seront jamais ouverts.',
    'Faites le tri dans vos mails : effacez tout ce dont vous n’avez pas besoin et exportez les mails importants vers une clef usb.
    Mettez vos écrans en mode sombre au maximum.
    Utilisez cleanFox pour vous desinstaller de toutes les newsletters et ainsi éviter les spams ',
    'Réaliser un site internet et écrire un article sur la pollution numérique est assez paradoxale. Il est vrai qu’il est devenu quasiment nécessaire d’utiliser le numérique dans notre vie quotidienne. Il est tout de même important de prendre conscience que le numérique reste à l’origine de 3.7% des émissions totales de gaz à effet de serre et 4.2% de la consommation d’énergie primaire.', 2),
    ('La consommation d’eau dans le monde.',
    'jour3-facile.jpg',
    'Désormais, il suffit d’ouvrir le robinet pour profiter de l’eau potable. Celle-ci ne sert d’ailleurs plus uniquement à s’hydrater : vaisselle, douche, toilettes, piscine, arrosage du jardin… Ses usages sont multiples, mais elle n’en demeure pas moins une ressource rare qui doit être préservée.',
    'L''utilisation de l''eau par un ménage français est destinée à 60 % pour l''hygiène corporelle et domestique et à l''évacuation des toilettes et seulement à 1 % à la boisson.',
    'Je ne pense pas qu’il y ait besoin de faire un dessin *rire* . Un autre pas vers l’écologie serait d’utiliser des toilettes sèches et ainsi réduire encore plus sa consommation d’eau (reportage TF1 sur les toilettes seches https://www.tf1.fr/tf1/habitons-demain/videos/habitons-demain-les-toilettes-seches-47894645.html). 
    D’autres techniques sont possibles pour économiser l’eau comme les chasses d’eau à double débit .',
    'Uriner sous la douche reste bon pour la planète. Cela permet d’économiser l’eau de la chasse d’eau et ainsi de diminuer sa consommation d’eau.
    Chaque seconde, juste en France, c’est plus de 3171 Litres d’eau qui sont utilisés. 
    On compte environ 30 litres d’eau simplement pour la chasse d’eau par personne (soit environ 12 litres par chasse) .', 3),
    ('1 Déchet par Jour : Nouveau Concept',
    'jour4-facile.jpg',
    'Pour rendre notre vie meilleure, nos rues et villes plus propres donc par conséquent notre futur plus propre, il y a ce concept qui est de ramasser au moins un déchet par jour. En faisant son jogging, ou en sortant son chien, ayez le réflexe de ramasser un ou plusieurs déchets et de le mettre dans la poubelle . C’est rapide et si tout le monde faisait pareil on réduirait drastiquement le nombre de déchets par terre.',
    'Saviez-vous que plus de 81.000 tonnes de déchets sauvages sont jetés tous les ans dans la nature, sur les routes et les autoroutes, les plages et les montagnes françaises.',
    'Il y a un concept qui s''appelle “1 déchet par jour” qu’on peut retrouver ici https://1dechetparjour.com/. Le concept est simple chaque jour il faut ramasser un déchet , prendre une photo, jeter ce déchet et publier la photo et nommer des amis pour qu’eux même refasse le défi et ainsi de suite. Plus on le fait , plus il y aura des gens touchés.',
    'Avec ce concept, les personnes réalisant le challenge font un geste écologique, puis nominent des amis qui refont le challenge. En le faisant tous les jours, un maximum de personnes sera mobilisé.', 4),
    ('Brosser ses dents écologiquement.',
    'jour5-facile.jpg',
    'Pourquoi choisir une brosse à dents en bambou ? 
    C’est une alternative écologique ! Qui plus est, elle est disponible à un petit prix et propose de nombreux avantages. Plus durable qu’une brosse à dent traditionnelle, elle a toutes les caractéristiques que celle-ci. Mais en mieux. 
    Totalement respectueuse de l’environnement, les brosses à dents en bambou utilisent des charbons et du nylon.',
    'Saviez-vous que votre brosse à dent en bambou pourra être utilisée comme petit piquet de jardin ?',
    'Vous pouvez acheter les brosses dans différents magasins (cora, carrefour, magasin bio, action) et également en ligne sur différent site dont amazon : https://www.amazon.fr/Brosses-Biod%C3%A9gradable-Ergonomique-Charbon-V%C3%A9g%C3%A9tal/dp/B07L3R6G5S/ref=as_li_ss_tl?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=brosse+%C3%A0+dent+bambou&qid=1556014656&s=gateway&sr=8-6&linkCode=sl1&tag=brosse-a-dents-bambou-21&linkId=2eec4186f06a1838c450284210e4e5d8&language=fr_FR',
    'Chaque année, ce sont plus de 4,7 milliards de brosses à dents qui sont jetées et qui vont jusque dans nos océans.  Contrairement aux brosses à dents en bambou, la majorité des brosses à dents classiques ne se recyclent pas.', 5),
    ('Un sac réutilisable ? Ah oui ?',
    'jour6-facile.jpg',
    'Qui n’a jamais voulu avoir son propre sac personnalisé pour y mettre ses fruits et légumes ? Vous ? Je me doute bien que oui. De ce fait au lieu de laisser traîner vos vieux morceaux de tissus dans votre placard, faites-en des sacs réutilisables. Selon vos goûts, vos envies. Un petit sac avec un personnage de ton manga préféré ? Alors ? ça vous dit ?', 
    'Saviez-vous qu’un sac réutilisable fabriqué à partir de récupération = très peu d’énergie. Pas d’eau, pas de déchets, pas de produits toxiques supplémentaires.',
    'Il suffit d’avoir une machine à coudre, votre tissu et c’est parti. (demandez à votre grande tante si jamais vous avez dû mal)',
    'Les sacs en plastique ce sont grosso modo 20 minutes d’utilisation et 400 ans pour disparaître, voilà pourquoi il faut rapidement passer au réutilisable', 6),
    ('Le savon solide toujours d’actualité ?',
    'jour7-facile.jpg',
    'Le savon solide a été utilisé pendant des décennies, à l''époque de vos parents, même à l’époque de vos grand-parents (je crois bien). Ce savon présente de multiples avantages principalement écologiques et économiques. Il y a de nombreuses occasions pour repasser au savon dur. 
    Ce savon contient moins de substances dangereuses. 
    Il est meilleur pour la peau et se conserve plus longtemps qu’un gel douche.',
    'Le saviez-vous ? Le savon solide est en général zéro déchet tandis que son copain, le gel douche représente en général 750g de déchets plastiques par an et par personne',
    'Vous pouvez retrouver des savon dur dans les grandes surface, les magasin bio, les pharmacie et également sur internet https://www.nuoobox.com/collections/savons-solides',
    'Le savon dur contient moins de substances dangereuses pour la peau qu’un gel douche, il se conserve plus longtemps. Son emballage est plus écologique voire zéro déchet lorsqu’il est acheté en vrac . Le gel douche de plus rarement recyclé, est vendu dans des flacons en plastique, nécessitant l’extraction de pétrole et polluant ainsi l’atmosphère et la nappe phréatique.', 7),
    ('La gourde, l’objet réutilisable à acheter en 2021',
    'jour1-intermediaire.jpg',
    'La gourde devient de plus en plus prisée dans la vie de tous les jours. Cet accessoire de tous les jours est devenu très prisé et est une alternative à la bouteille qui reste peu écologique.',
    'Saviez-vous que chaque jour, le monde se débarrasse de 200 millions de bouteilles en plastique.',
    'La gourde est devenue un vrai indispensable! Vous pouvez donc en trouver partout. N’hésitez pas à vous renseigner sur les différents modèle afin de trouver celle qui vous correspond.',
    'Les gourdes sont réutilisables et permettent ainsi de réduire considérablement sa consommation de plastique. En Europe c’est plus de 73 bouteilles d’environ 1.5L qui sont consommées chaque année par personne, alors qu’un seul gourde suffit à économiser de l’argent, réduire la production de plastique et votre santé.', 8),
    ('Consommer de saison',
    'jour2-intermediaire.jpg',
    'Acheter de saison et local c’est réduire l’impact environnemental de vos achats. En effet, le transport',
    'Les fruits et légumes que l''on trouve hors saison sont transportés par avion ou bateau puis par camion. Ainsi pour que les fruits ne mûrissent pas trop vite, ceux ci sont recouverts de produits chimique pour garder leur conservation',
    'Vous trouverez différents calendriers des fruits de saison en France. L’application fruits et légumes de saison sur app store et play store vous permet également de vous informer chaque mois sur les différents produits de saison.',
    'Acheter de saison et local c’est réduire l’impact environnemental de vos achats  et ainsi encourager les circuits courts . En effet, le transport est considérablement réduit, les fruits et légumes sont plus savoureux et plus riches.', 9),
    ('Cotons tiges réutilisables ? Cotons démaquillant ? Ah !',
    'jour3-intermediaire.jpg',
    'Ce qui est sûr, c’est que se démaquiller semble aisé. Se nettoyer les oreilles aussi. Mais pourquoi ne pas le faire de façon plus écologique et plus économique ? Cela épargnera que les disques de coton et les cotons tiges s’entassent dans la poubelle. La solution est donc de passer au format lavable et réutilisable. Et en plus, il y en a pour tous les goûts.',
    'Depuis le 1er janvier 2020, les cotons tiges à usage unique sont interdits à la vente sur le territoire français, le but étant de limiter la surconsommation de plastique qu’ils engendrent.',
    'De plus en plus de commerces proposent des produits réutilisables. Attention tout de même au produit que vous achetez! Les cotons doivent être respectueux de l’environnement certes mais surtout respectueux de votre peau.
    Vous pouvez trouver des kits à acheter en suivant ce lien . https://www.tendances-emma.fr/5-femme-eco-belle',
    'Les produits d''hygiène réutilisable restent en général plus respectueux et moins agressifs de notre corps et notre peau. Arrêter les cotons c’est économiser plus de 87 litres d’eau par an, 1.7 litres de pétrole, 66.2Kw d''électricité et de l’argent.', 10),
    ('Les tawashi',
    'jour4-intermediaire.jpg',
    'Un tawashi c’est quoi ? Une éponge . Oui mais une éponge originaire du Japon. Contrairement aux éponges classiques qui sont traitées chimiquement, le Tawashi peut être fabriqué de manière naturelle et lavé régulièrement en machine. Ce qui allonge grandement leur durée de vie. Son utilisation peut être aussi bien pour faire la vaisselle ou bien faire le ménage.',
    'Saviez-vous que “Tawashi” signifie “Lingette” en japonais.',
    'Le tawashi peut être fabriqué à la main à l’aide de vieux vêtements en forme de tube. 
    Sinon il y a la possibilité d’en trouver ici : https://www.etsy.com/fr/search?q=tawashi',
    'Les éponges classiques étant généralement traitées chimiquement pour avoir leur couleur et augmenter leur résistance, dès qu''elles arrivent en fin de vie, elles ne sont ni recyclables, ni biodégradables.Cela contribue à charger les sols et les eaux en microplastiques.
    Deux inconvénients que n’ont pas les Tawashis', 11),
    ('Le grand tri.',
    'jour5-intermediaire.jpg',
    'Un vêtement trop petit, abîmé ? Votre enfant grandit plus vite que prévu ? Que faire de tous ces vêtements qu’on ne peut plus utiliser soi-même?  
    Plusieurs moyens sont bons pour donner une seconde vie à ses vêtements. On peut les mettre dans un conteneur dédié, les donner ou bien les revendre. On peut aussi les transformer. Plusieurs moyens sont mis à disposition pour ne pas les jeter. Il faut leur laisser une seconde chance !',
    'Saviez-vous que les chiffres de l''industrie suggèrent que les habits modernes ont une durée de vie de deux à dix ans.',
    'Vous pouvez vendre vos vêtements grâce à Vinted, Ebay, Le Bon Coin par exemple, ou bien les emmener dans un conteneur qui est fait pour.',
    'Pour éviter de tout jeter, mieux vaudrait faire son tri, en plus d’éviter de polluer la planète avec des vêtements que vous n’aimez plus, cela pourrait être bénéfique à d’autres personnes . Vous aidez donc la planète et ses habitants .', 12),
    ('Changer d’habitude pour vous déplacer',
    'jour6-intermediaire.jpg',
    'Pourquoi utiliser sa voiture pour de petits trajets du quotidien ? Vous avez un vélo ? Utilisez le . Il y a énormément d’avantages à rouler en vélo. Qu’il soit normal ou électrique, terminé les embouteillages et ses contraintes. Avec ce qu’on appelle "l''Éco-Conduite", vous aurez un gain de temps et d’argent. Cette solution va permettre de faire de l’exercice mais surtout de moins polluer, vous êtes ainsi gagnant sur plusieurs tableaux.  
    Les transports en commun quant à eux, ont aussi un impact positif sur l’environnement, un bus émet 7 fois moins de gaz à effet de serre par heure et par passager qu’une voiture.',
    'Saviez vous que circuler en voiture coûte 7 à 16 fois plus cher qu’en transports en commun',
    'Prenez votre vélo et profitez du beau temps.',
    'Faire vos trajets du quotidien en vélo ou transport en commun réduit considérablement l’émission de gaz à effet de serre.', 13),
    ('STOP PUB !',
    'jour7-intermediaire.jpg',
    'Marre de recevoir des pubs à tout va dans sa boite aux lettres ? Ayez le réflexe Stop Pub. 
    C’est quoi Stop Pub ? C’est un autocollant qu’il faut coller sur sa boîte aux lettres. Un foyer français reçoit en moyenne 40 Kg de publicités papier chaque année. C’est énorme. Ce dispositif permet de refuser de recevoir la publicité papier dans sa boîte aux lettres.',
    'Saviez vous qu’en France, plus de 13 millions de français ne reçoivent plus de prospectus publicitaires et économisent ainsi 200 000 tonnes de gaspillage inutile de papier.',
    'Coller l’autocollant Stop Pub sur sa boîte aux lettres. Il y a plusieurs façon d’en obtenir un : 
    Dans des points de distribution
    Sur la boutique en ligne
    En l’imprimant soi-même',
    'Pour la protection de l’environnement, des raisons économiques. 1 stop pub = 40kg de papier évitée et 4€ d’économies sur les frais de collecte et traitement des déchets. 
    100 Stop Pub = 4 tonnes de papier évitées et 400€ d’économies sur les frais de collecte et traitement des déchets.', 14),
    ('Un lien entre réduire la consommation de viande et la pollution ?',
    'jour1-difficile.jpg',
    'En quoi manger moins de viande a un impact sur la planète ? On sait que c’est bon pour l’équilibre alimentaire, mais qu’en est il pour la planète ? Ce qu’il faut savoir, ce n’est pas le fait de moins manger de viande en soi qui est bon pour la Terre, c’est le fait de moins élever de bovins, de volaille et autres animaux produisant de la viande. 
    Plus la consommation de viande augmente, plus la production mondiale augmente elle aussi. 
    Réduire l’élevage aura un comme conséquence de réduire le taux de méthane rejeté dans l’air ce qui aura pour effet direct de réduire l’effet de serre. Réduire la consommation d’eau utilisée pour abreuver le bétail. Réduire le rejet d’azote dans les rivières ou encore réduire la culture des plantes et céréales destinées au bétail au profit des cultures destinées à la consommation humaine.',
    'Saviez vous qu’une vache produit 600 litres de méthane par jour et que les bovins sont 1,4 milliard, il suffit de se mettre aux calculettes pour constater que l’élevage se trouvera au centre des questions et des enjeux écologiques.',
    'Réduire sa consommation de viande progressivement, ce challenge propose d’essayer une semaine complète pour voir si vous y arriver.',
    'Moins consommer de viande , c’est élever moins de bêtes donc par conséquent c’est réduire la pollution.', 15),
    ('Greenpeace. Qui sont-ils ?',
    'jour2-difficile.jpg',
    'Greenpeace a une mission: donner une voix à la planète et protéger notre avenir. 
    Créé il y a une cinquantaine d’années, Greenpeace agit sur terre et mer afin de promouvoir la paix et protéger l’environnement. 
    Greenpeace est présente dans 55 pays. Il y a plus de trois millions d’adhérents et plus de 36 000 bénévoles. On peut agir en ligne en signant des pétitions, faire des dons pour soutenir financièrement le mouvement, devenir bénévole, lancer sa campagne citoyenne ou bien encore rejoindre le réseau social écolo. Tout ça pour dire qu’on peut agir avec Greenpeace à travers toutes ces méthodes. ',
    'Greenpeace possède un bateau qu’ils ont nommé “L’Esperanza”.', 
    'Toutes les informations sont sur leur site internet https://www.greenpeace.fr/',
    'Parler c’est bien, agir c’est mieux. Avec Greenpeace vous êtes entre de bonnes mains.', 16),
    ('Un mégot, deux mégots , trois mégots .. ',
    'jour3-difficile.jpg',
    '“Fill the bottle challenge” ou comment remplir une bouteille avec des mégots de cigarettes pour lutter contre la pollution. 
    En France, 30 milliards de cigarettes sont jetées par terre chaque année. C’est énorme. Une lycéenne française a ainsi créé ce challenge qui consiste à collecter dans une bouteille l’ensemble des mégots de cigarettes rencontrées lors de vos trajets quotidien et poster une photo sur les réseaux sociaux accompagné du hashtag #FillTheBottle.',
    'Le saviez vous : un mégot est susceptible, à lui seul, de polluer 500 litres d’eau et met en moyenne douze ans à se dégrader dans la nature.',
    'Faire le challenge, une simple bouteille suffit.',
    'Les réseaux sociaux ayant un grand impact de nos jours, ce challenge est tout bien vu. Plus il est diffusé, plus les personnes s’y mettront. Moins de mégots par terre c’est beaucoup de pollution en moins.', 17),
    ('Trashtag !',
    'jour4-difficile.jpg',
    'Le but de ce challenge est de trouver un lieu rempli de déchets, le nettoyer et photographier l’avant-après. En prenant une journée pour nettoyer une plage ou bien une forêt. Avec les réseaux sociaux l’impact est encore plus grand. C’est un défi qui peut être réalisé par tous et n’importe où. Bien plus encore que son effet immédiat sur l’environnement, le Trashtag Challenge permet de sensibiliser la jeunesse à un enjeu qui la concerne directement. ',
    'Le saviez vous : 310 millions de tonnes de déchets plastique sont générées chaque année, dont un tiers finit dans la nature. Des centaines de milliers d’animaux meurent ainsi chaque année à cause de la pollution plastique, notamment dans les mers et océans.',
    'Muni de son smartphone, il suffit de trouver un lieu plein de déchets, le prendre en photo, le nettoyer, le prendre à nouveau en photo et le poster sur les réseaux sociaux. ',
    'Ramasser les déchets est la première étape d’une prise de conscience. Ensuite il y a le tri, puis enfin acheter des produits qui généreront moins de déchets.', 18),
    ('Les produits d’entretien naturels : un indispensables',
    'jour5-difficile.jpg',
    'Nettoyer sa maison est une tâche quotidienne à effectuer. Néanmoins, la consommation de produits de nettoyage de grande surface a un impact important sur l’environnement mais aussi sur notre santé.',
    'L’efficacité des produits de nettoyage maison / écologique se révèle dans certains cas largement supérieure à celle du produit de nettoyage classique.  Contrairement aux idées reçues, la mousse diminue l’efficacité du lavage.',
    'Pour choisir son produit de nettoyage écologique, il faut qu’il ne soit pas nocif, ni pour vous ni pour l’environnement. Concernant la liste des produits indispensables nous retrouvons le vinaigre, la microfibre, le bicarbonate de soude, le savon dur, les huiles essentielles etc. 
    Voici une recette multi-usage et naturel https://www.ecoconso.be/fr/content/recette-pour-faire-son-nettoyant-multi-usage-naturel',
    'La consommation de produits de nettoyage n’est donc pas sans conséquence sur l’environnement et la santé. Elle a un effet non négligeable sur la qualité de l’eau (contamination des nappes phréatiques, phénomène d’eau trouble). 
    Elle provoque également la pollution de l’air car elle est émetteurs de COV, nocifs pour la santé qui provoque des problèmes respiratoires, des allergies mais également qui contribuent au réchauffement climatique en augmentant la couche d’ozone .', 19),
    ('Consommer intelligemment',
    'jour6-difficile.jpg',
    'Un restau de temps en temps, c’est vrai que ça ne fait pas de mal! mais nous voyons de plus en plus de produits dans nos poubelles qui n’ont pas eu le temps d’être consommer ',
    'Le saviez-vous : Too good to go est également en association avec jardiland pour sauver les plantes non vendues.',
    'L’application est disponible en France via l’appstore ou le play store! Il suffit de s’inscrire, de partager sa localisation et de choisir un panier surprise  disponible qui n’a pas été vendu. ',
    'Too good to go a pour but de limiter le gaspillage alimentaire. En choisissant plutôt un panier surprise qu’un plat au restaurant .  Il faut savoir que pour tous les aliments gaspillés, 170 BILLIONS de litres d’eau sont utilisés chaque année. Ce nombre incroyable de litres pourrait combler tous les besoins d’eau des ménages du monde entier. ', 20),
    ('L’emballage plastique (alimentaire) : un fléau pour l’environnement ',
    'jour7-difficile.jpg',
    'Les fabricants et les clients montrent de plus en plus un vrai intérêt pour changer leurs habitudes d’emballage. Néanmoins l’usage d’emballage plastique reste encore une habitude de nos modes de consommation. Un confort pas sans conséquence ',
    'Savez vous qu’un humain peut ingérer sans le vouloir près de 5 grammes de plastique (soit une carte bancaire) chaque semaine pendant toute une vie ?',
    'Il existe beaucoup de solutions pour réduire sa consommation d’emballage et de plastiques. Le choix de produits 100% recyclés ou encore la réalisation de ses courses en vrac.
    Vous trouverez un article avec plus de précision sur les cours en vrac juste ici https://www.another-way.com/blog/courses-vrac/',
    'Nos déchets plastiques bien souvent se transforment en microplastiques, des petites particules que nous pouvons retrouver dans l’eau, dans l’air que nous respirons, dans nos aliments. Les emballages représentent près de 5% des émissions de gaz à effet de serre. Un “7ème continent” fait également partie de notre monde, un continent d’environ 3.5 millions de km2 (6x la France) simplement fait de plastique terrestre.', 21);


INSERT INTO "user"
    (email, "password", first_name, last_name, pseudo, "img", "date", level_id, challenge_id, article_id, question_id)
VALUES
    ('echo@vue.fr', 'ecologie', 'Bou', 'Alban', 'echonew', 'environmental-protection-683437_1280.jpg', '2021-03-02 21:47:18.582511+01', 2, 11, 11, 7),
    ('props@vue.fr', 'ecologie', 'Vaisselle', 'Aude', 'mrprops', '2.png', '2021-02-02 21:47:18.582511+01', 3, 20, 20, 3);


COMMIT;
