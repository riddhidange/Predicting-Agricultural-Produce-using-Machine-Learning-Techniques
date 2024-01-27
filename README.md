## Predicting-Agricultural-Produce-using-Machine-Learning-Techniques

# Introduction
Agriculture has the largest contribution in the GDP of our country. But still the farmers do not get the exact worth price of the crops. It is mostly happening due to improper irrigation or inappropriate crops selection or also sometimes the crop yield is less than that of expected. In order to add efficiency to the whole agriculture process a “Predicting agricultural produce using Machine Learning Techniques” is proposed in the following project.
The system aims at predicting the agricultural produce by obtaining area on Google Maps API and further calculate area under cultivation. GPS is now widely used by various parties, especially in determining the position of object location. GPS can be used to measure the land areas, on both wide and flat areas.
The generated GPS coordinates will be converted into units of meter so that length of each side can be known which is later used to calculate the area of a land plotted on the Google Map. This calculated area is then used in crop prediction of the yield. The system also consists of a crop recommendation algorithm which uses Machine Learning and Data analytics techniques in order to predict the most profitable crop in the forecasted weather and soil conditions at a specified location. Thus, the prediction and recommendation of crops under the area will help improve the overall efficiency of the crops.

# Problem statement
The rapid growth and changes in environment require the farmers to be familiar with improved methods of producing agriculture fields. The farmers currently rely on their limited knowledge of the field, while not considering factors like area, soil, weather conditions, NPK content, humidity etc. which is not always profitable and result in poor agricultural produce. Thus, to improve the productivity and efficiency in the field of agriculture, we propose a system which takes all these parameters to predict the crop yield and recommend the most profitable crop.

# Methodology

Google Maps APIs are prepackaged pieces of code that let you quickly and easily include maps on your websites or in your mobile apps – and then add extra functions to your applications. In the project, we use Google Maps API for area calculation module to calculate the area for cultivation by using mapped points.
The Maps JavaScript API lets you customize maps with your own content and imagery for display on web pages and mobile devices. The Maps JavaScript API features four basic map types (roadmap, satellite, hybrid, and terrain) which you can modify using layers and styles, controls and events, and various services and libraries.
Steps involved in Maps JavaScript API:
Step1: Declaring your application as HTML 5 Step 2: Loading the maps JavaScript API
Step 3: Map Document Object Module (DOM) Elements Step 4: Declare the Map Object
Step 5: API key in manifest file
3.2 Random Forest Classifier
Random Forest is a classifier that contains several decision trees on various subsets of the given dataset and takes the majority voting or average to improve the predictive accuracy of that dataset.
• Decision Tree
A Decision tree is a flowchart like tree structure, where each internal node denotes a test on an attribute, each branch represents an outcome of the test, and each leaf node (terminal node) holds a class label. A tree can be “learned” by splitting the source set into subsets based on an attribute value test. This process is repeated on each derived subset in a recursive manner called recursive partitioning. The recursion is completed when the subset at a node all has the same value of the target variable, or when splitting no longer adds value to the predictions.
• Random Forest Classifier
Random forest, like its name implies, consists of many individual decision trees that operate as an ensemble. Each individual tree in the random forest spits out a class prediction and the class with the most votes become our model’s prediction.
Random Forest Regression
Random Forest Regression is a supervised learning algorithm that uses ensemble learning method for regression. Ensemble learning method is a technique that combines predictions from multiple machine learning algorithms to make a more accurate prediction than a single model.
Figure 3.2 Random Forest Regression
Advantages of using Random Forest:
o It predicts output with high accuracy, even for the large dataset it runs efficiently.
o It can also maintain accuracy when a large proportion of data is missing.
Disadvantages of Using Random Forest:
o Complexity: Random Forest creates a lot of trees and combines their outputs. By default, it creates 100 trees in Python sklearn library. Thus, this algorithm requires much more computational power and resources. On the other hand, decision tree is simple and does not require so much computational resources.
o Longer Training Period: Random Forest require much more time to train as compared to decision trees as it generates a lot of trees and makes decision on the majority of votes.

# Proposed System

Proposed work
Human error and misjudgment can lead to a wastage of crop produce due a misconceived need for a certain type of crop over another by farmers as well as the incorrect pricing of crops by administrative officers. Hence, we propose an idea to identify the sustainability of crops in a particular land area based on certain parameters which may improve the overall efficiency of the agriculture sector. Our project primarily focuses on two modules. One module depends on the Prediction of Agricultural Produce. In the second module we will look into Real-Time Crop Recommendation.
Predicting Agricultural Produce
In this module we start by using Google Maps API to calculate the area under cultivation using mapped points on maps. Then, we use the widely available datasets from the Ministry of Agriculture and Farmers Welfare, India and identified crop name and area under cultivation will be used to predict the crop yield. Google Maps API is used to calculate the area under cultivation using mapped points on maps. This part of the module utilizes a modified version of Shoelace Algorithm.
Crop Recommendation
This is basically a prototype for a real-time crop recommendation algorithm using Machine Learning and Data Analytics. The business logic in Python uses Machine Learning techniques in order to predict the most profitable crop in the forecasted weather and soil conditions at a specified location. The proposed system will integrate the data obtained from soil, crop repository, weather department and by applying machine learning algorithm: Random Forest Regression, a prediction of most suitable crops according to current environmental conditions is made. This provides a farmer with a variety of options of crops that can be cultivated.
Thus, the proposed system will intelligently help farmers get maximum crop output and knowledge. Hence, our prime focus of providing farmers a tool which will improve the agricultural output is also fulfilled.

# System Architecture

The random forest algorithm works by completing the following steps:
Step 1 The algorithm selects random samples from the Ministry of Agriculture and Farmer’s Welfare dataset provided.
Step 2 The algorithm will create a decision tree for each sample inputted. It will then get a prediction result from each decision tree created.
Step 3 Voting will then be performed for every predicted result. For a classification problem, it will use mode.
Step 4 And finally, the algorithm will select the most voted prediction result as the final prediction.

# Flowchart

<img width="740" alt="Screenshot 2024-01-27 at 6 44 46 AM" src="https://github.com/riddhidange/Predicting-Agricultural-Produce-using-Machine-Learning-Techniques/assets/67019064/d88009dd-15ac-4844-b433-af5dfd20ba58">

# Dataset
The is obtained from Ministry of Agriculture and Farmers Welfare, and this data set includes a total of 17600 entries and 22 crops. We have used crops namely rice, maize, chickpea, kidneybeans, pigeonpeas, mothbeans, mungbean, blackgram, lentil, pomegranate, banana, mango, grapes, watermelon, muskmelon, apple, orange, papaya, coconut, cotton, jute, coffee. Out of the total images, we have taken 80% of the input to train the data set and 20% to test the data set.
We have parameters like N, P, K values, Temperature, Humidity, pH values and rainfall. All of these variables will be considered by the algorithm to give an appropriate output according to the input on the website.


# Implementation

Are Calculation
The area calculation feature is used to calculate the area of any location using the Google Maps API.
Mark points on the map of the area you want to calculate, once 
the points marked are a closed polygon i.e., a closed figure then the area will be calculated and displayed. The area is calculated in meter square (meter sq.).
Below is a representation of how this module looks like.

<img width="745" alt="Screenshot 2024-01-27 at 6 46 52 AM" src="https://github.com/riddhidange/Predicting-Agricultural-Produce-using-Machine-Learning-Techniques/assets/67019064/79a6e2cf-1fc1-41d9-aae7-a0c3d00526d9">



<img width="679" alt="Screenshot 2024-01-27 at 6 47 11 AM" src="https://github.com/riddhidange/Predicting-Agricultural-Produce-using-Machine-Learning-Techniques/assets/67019064/81dca965-9f50-43a6-ba48-d05cbd6c0a3c">

Working of the Area Calculation module
A drawing manager is attached on the map to let the user draw markers, lines and shapes.
<img width="695" alt="Screenshot 2024-01-27 at 6 47 43 AM" src="https://github.com/riddhidange/Predicting-Agricultural-Produce-using-Machine-Learning-Techniques/assets/67019064/b7170982-6dde-4961-acc3-93282dda3e95">

Once the marked points or lines are a polygon then the calculated area is displayed on the screen. To calculate the area, the Google Maps Geometry Library is used. The function computeArea() is responsible for the calculation of the area. The function is written in the “area_map.js” file.
Figure 5.4 Area Calculation Output
As we can see in the above picture the shows the area of the polygon marked on the map in meters square (meter sq.).


Crop Recommendation
In this system, the user can use the soil data from their side and based on factors like NPK values, temperature, humidity, pH and rainfall. Using the Random Forest Classifier the prediction of the suitable crop for the suitable conditions will be achieved.
Obtaining dataset
This dataset was obtained from Ministry of Agriculture and Farmers Welfare. 

Dataset Detais:

NPK Values
All plants need nitrogen, phosphorus, and potassium to grow. Without enough of any one of these nutrients, a plant will fail.
Nitrogen (N) – Nitrogen is largely responsible for the growth of leaves on the plant.
Phosphorus (P) – Phosphorus is largely responsible for root growth and flower and fruit development.
Potassium (K) – Potassium is a nutrient that helps the overall functions of the plant perform correctly.
Temperature
Germination of seed, root function, rate of plant growth, and occurrence and severity of plant diseases all are affected by soil temperature. Since an unfavorable soil temperature during the growing season can retard or ruin a crop.
Humidity When conditions are too humid, it may promote the growth of mold and bacteria that cause plants to die and crops to fail, as well as conditions like root or crown rot.
pH
A soil pH below about 5.6 is considered low for most crops. Generally, the ideal pH range is between 6.0 and 7.0
Rainfall
The south-west monsoon irrigates over half of India’s crop land. Its arrival marks the beginning of the cultivation of rain-fed kharif crops which are heavily dependent on the monsoon—the quantity of rainfall determines agricultural production. Early showers will help farmers start planting of major crops such as rice, soybeans, cotton and pulses. With farmers reeling under stress due to low crop prices, normal rainfall is expected to help revive the sector and alleviate rural distress.
<img width="557" alt="Screenshot 2024-01-27 at 6 50 41 AM" src="https://github.com/riddhidange/Predicting-Agricultural-Produce-using-Machine-Learning-Techniques/assets/67019064/2b26c4dc-4227-4fa3-a896-4be5281c2e72">

Separating features and target label
Features are individual independent variables that act as the input in your system. For our dataset, the NPK values(all individually i.e N, P, K), Temperature, Humidity, pH and Rainfall are the “features”.
The target is whatever the output of the input variables. It could be the individual classes that the input variables maybe mapped to in case of a classification problem. In our model, the target is the Crop to be produced.
<img width="722" alt="Screenshot 2024-01-27 at 6 50 53 AM" src="https://github.com/riddhidange/Predicting-Agricultural-Produce-using-Machine-Learning-Techniques/assets/67019064/326f9df0-1d9e-4f33-9471-a259b235baa9">

Splitting into train and test data
The idea of “sufficiently large” is specific to each predictive modeling problem. It means that there is enough data to split the dataset into train and test datasets and each of the train and test datasets are suitable representations of the problem domain. This requires that the original dataset is also a suitable representation of the problem domain.
<img width="777" alt="Screenshot 2024-01-27 at 6 51 04 AM" src="https://github.com/riddhidange/Predicting-Agricultural-Produce-using-Machine-Learning-Techniques/assets/67019064/1a2dfd6d-e4b6-4207-b9d5-45487dd9fc62">

Using Random Forest Classifier
The sklearn.ensemble module includes two algorithms out of which one is Random Forest Classifier. This algorithm is specially designed for trees.
The train and test data that we acquired will be used here. The Accuracy Score using the “Random Forest Classifier” for the train and test data is 0.99090
<img width="794" alt="Screenshot 2024-01-27 at 6 51 13 AM" src="https://github.com/riddhidange/Predicting-Agricultural-Produce-using-Machine-Learning-Techniques/assets/67019064/66566438-7b11-4419-9fb8-e4a3e31c84ed">

Making a prediction
Creating an array “data”, which will consist of all the features we need for the target prediction.
The values in the list is [N, P, K, Temperature, Humidity, pH, Rainfall].We imported Numpy as np.
Np.array(data) converts list into an array so now we have the array “data”. The array is then used in predicting the crops under the input conditions given.
The “RF.predict(data)” is used to predict the recommended crop. RF is the Random-Forest-Classifier algorithm. As shown in the below figure the crop recommended for given conditions is Jute.
<img width="754" alt="Screenshot 2024-01-27 at 6 51 23 AM" src="https://github.com/riddhidange/Predicting-Agricultural-Produce-using-Machine-Learning-Techniques/assets/67019064/11e91755-30c3-46bf-bccd-c830fb189745">



UI output:
<img width="720" alt="Screenshot 2024-01-27 at 6 51 44 AM" src="https://github.com/riddhidange/Predicting-Agricultural-Produce-using-Machine-Learning-Techniques/assets/67019064/2c940884-1b60-4520-98d1-46fb91a380cb">

<img width="715" alt="Screenshot 2024-01-27 at 6 51 59 AM" src="https://github.com/riddhidange/Predicting-Agricultural-Produce-using-Machine-Learning-Techniques/assets/67019064/afc88fef-171f-480c-a42a-3280d81ed333">


Crop Prediction
Connecting our first module (Area Calculation Module) to the Crop Prediction Module, we will be using the output of the first module as an input in this module.
In this system, the user can use the current district, the season he prefers and the area of your field.


<img width="783" alt="Screenshot 2024-01-27 at 6 52 17 AM" src="https://github.com/riddhidange/Predicting-Agricultural-Produce-using-Machine-Learning-Techniques/assets/67019064/bf53b422-11ba-4e5b-ab90-bd49aa69cc92">

Input Parameters:

Current District
The current district could be the district of the respective farmer/user where the district strictly belongs to the state of Maharashtra. The input of district depends totally upon the user input.
Current Season
The seasons taken under consideration for the prediction are mainly, Kharif and Rabi.
The season input depends upon for which season the farmer wants to predict its probable yield for the crops of the selected season.
Area of field
Area of field is as mentioned before, the area which can be calculated using the “Area Calculation Module”.
The area calculated is in “m²”. The user is free to add his/her already calculated area but it should be in the unit mentioned before. Prediction according to the area, district and season preferred.

Output:
<img width="796" alt="Screenshot 2024-01-27 at 6 52 51 AM" src="https://github.com/riddhidange/Predicting-Agricultural-Produce-using-Machine-Learning-Techniques/assets/67019064/6d612788-07ad-49c0-931d-547953c23d9d">

The output gives you the crops which can be produced in a particular season, in a particular district as well as the area of the field of the farmer.
The output is in a decreasing manner i.e. the highest production of a crop will be on top.
For example
As seen in the above figure, the inputs are District is Akola, Season is Rabi and Area of field is approximately 1000 m².
The output crops include, Wheat, Sunflower, Maize, etc with Wheat being the highest production i.e. 2047 tonnes and Jowar being the lowest i.e. 1134 tonnes.


# Conclusion:

In this project, we aim to use Random Forest Algorithm to provide us with accurate crop recommendations when the user puts in the inputs required. By the means of Google maps API we are also getting a precise measure of the land in concern. By this project we aim to achieve test results having high accuracy in recommendation and prediction of crops as well as provide the accurate area of land under cultivation. Thus, it makes it helpful to the farmers in both sectors.
This undertaking attempts to start an area that is in great demand. During this project, we investigated different papers and we picked up information on machine learning algorithms and we got various ideas from these papers. Random Forest Regression algorithm as well as Google maps API for area selection was an inspiration from all the papers we went through. We aspire for the outcomes and strategies introduced in this article to be further extended to a greater task.



