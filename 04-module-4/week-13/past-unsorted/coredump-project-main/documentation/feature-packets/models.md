**Models**

**`Question` Model**
|     Column      |  Type  |     Validations            |
| --------------  | ------ | -------------------------- |
|      id         | int    | PK, auto, notNull, unique  |
|  questionSubject| string |       notNull              | 
|  questionText   |  text  |                            |
|      userId     |  int   |  references "Users".id     |

- **Associations:**
  - A Question belongsTo a User(`models.User`)
  - A Question hasMany Answers(`models.Answer`)
---------
**`User` Model**
|     Column      |  Type  |      Validations           |
| --------------  | ------ | -------------------------- |
|      id         |  int   |  PK, auto, notNull, unique |
|     username    |  text  |   unique, notNull          | 
|     email       |  text  |   unique, notNull          |
| hashedPassword  |  text  |   unique, notNull          |
|     avatar      |  ----  |                            |
- **Associations:**
  - A User hasMany Questions(`models.Question`)
---------
**`Answer` model**
|     Column      |  Type  |      Validations           |
| --------------  | ------ | -------------------------- |
|      id         |  int   |  PK, auto, notNull, unique |
|    answerText   |  text  |         notNull            | 
|    questionId   |  int   | references "Questions".id  |
|     userId      |  int   | references "Users".id      |
- **Associations**:
  - An Answer belongsTo a Question(`models.Question`)
----------
**`Votes` Model**
|     Column      |  Type  |      Validations           |
| --------------  | ------ | -------------------------- |
|      id         |  int   |  PK, auto, notNull, unique |
|      userId     |  int   | references "Users".id      |
|     answerId    |  int   | references "Answers".id    |
|      type       |  bool  | up=true    down=false      |
- **Associations**:
