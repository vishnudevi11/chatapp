import user from '../reducers/user';
 
export const data = {
    profile: {
      id: 1,
      name: "Vishnudevi S",
      image:user.image,
      
      
      contacts: [
        {
          id: 2,
          name: "Syam",
          image:
            "https://img.freepik.com/premium-photo/illustration-cute-boy-avatar-graphic-white-background-created-with-generative-ai-technology_67092-4578.jpg",
          chatlog: [
            {
              text: "Hii Vishnu,How are you?",
              timestamp: "12:55 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am good Syam.... What about you ?",
              timestamp: "12:58 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great, Vishnu.",
              timestamp: "1:00 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "lets meet",
              timestamp: "01:04 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Okay",
              timestamp: "01:08 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: "Ane",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhFhkTC1fQNTmNTf0kdJLFpxRM0-8OCLIvQ&usqp=CAU",
            
          chatlog: [
            {
              text: "Hello",
              timestamp: "3:00 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hii",
              timestamp: "3:02 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "How is you?",
              timestamp: "3:03 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Give me sometime,I will call you back",
              timestamp: "3:30 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Where are you ?",
              timestamp: "4:00 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Amala",
          image:
            "https://img.lovepik.com/free-png/20210923/lovepik-cute-girl-avatar-png-image_401231841_wh1200.png",
          chatlog: [
            {
              text: "Hi Vishnu",
              timestamp: "4:30 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Amala. What about you!",
              timestamp: "04:32 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great ,  Vishnu.",
              timestamp: "04:40 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Are you busy?",
              timestamp: "04:45 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: " no",
              timestamp: "04:50 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Shruthi",
          image:
            "data:image/jpeg;base64,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",
          chatlog: [],
        },
        {
          id: 6,
          name: "James",
          image:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUQDw8PEA8QDw8PDxAPDw8QDw8QFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGBAQGC0dIB0tLS0vKy0tLS0rLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwABBAUGBwj/xABEEAACAQIDBAgBCAcHBQEAAAABAgADEQQSIQUxQVEGEyJhcYGRoTIHQlJygrHB0RQjYnOSsuEzNENjosLwU3SD0vEk/8QAGwEAAgMBAQEAAAAAAAAAAAAAAgMBBQYABAf/xAA3EQACAQIDBAgEBQQDAAAAAAAAAQIDEQQhMQUSQVETYXGBkaHB8AYysdEiNELh8RQzorIjNWL/2gAMAwEAAhEDEQA/AMuSQCFabMzhQktLknEFWklwgJ1zrggQrS4QEi5wNpdpdoYWCQBIBGBYQEi5DYAWQLGWl5ZFzri8srLG5ZMsi5FxeWDljSsphbfp4ybsm6FESozMN1wTyuLymWSmdcAiARGEQTCuSLtKhkSiJNyQJJckkkoyQoMkkkkkk44KSSVIBLktLAliccQCEBLAkEG5FyQgssCEBBbIuUFhBYYWBVrKpAJt2Xc/VW1/5hFyklqRH8WSzMXaeL6tdPjI07l5zl9jbUZcdldiUrWpNmN+2fgOvf2ftTZ41892J36+HITj9poQ5IJBzCxGhU8CPCZipj51K6qJ5R0XV+5raezYU8M6Uvmlq+v7L0PUq9RUXMxsLgDiSToABxJl51sSSBa2a5HZ8eU4Ov0oqVWRwoDpTykfNSqRZ6g8r25AwqeKYgZmLW17rnefHv3z31dqRi3uq/kVdDY85pb73efHuS955cM+yrY9B8Izd+gH5+00WN21WJISyDmF7XveYtPFEDfYQ2ZCL3t56mVlTaGIqfqsurLz18y5pbLw1P8ATvP/ANZ+WnkYNXG1L3NR788xv6zX4nF87379/rMzEKo7W++4TR41zfxnmvva5nqdofLl2AV61909E6KKf0OlmJJIdrk3Ni7Ee080M9b2ThsmHpJ9GlTHsJb7KilUk1wX1ZR7Yn/xxT4u/h/IwiLImQyxZEv0ygEkSiIZEEwyQCIMMiVCQQMoy5JJxUkuSScXIBJCgkEAhgSgJYkAsghqJFEMCA2C2QLGKsiiVWrqguxtyHzj4CLnUUFvSdkiIxlNqMVdvgtTkNpCtQqM1Go4sxJXMSpG/cdIGI24axQ2ynq2pvbddmQgjxtMnbGMz1CwFhYCx3m3H7ppK+F1zoPrKDa/eO+ZOVeUXKEZXi3l45fY20cNGShUnC00lfwzNgznfOe2pfOeR/8As2+HJC2NzbcbG5H5zC2nSuA1uHuJ545M9U80a6i9j3cfCbjCkEaac/Ca/ZdO9QA66N56GNo3pO1O1wdE7jwHhJkBHLNmdiapCk8FsPM8JQrdkE/RFpW1qeSkFvcltTzO8zXtV7AHlIUboJysyY3E8Ae6a5nJ7/8AnGZIpE8Ce4C8vq7b19dIxCXdsrZwU1U6y/VhgXyi5yz0+htqk9guXXcCbH30955qte3ADwtMs7SXLYjUd09FDFzo33Unc8uIwNPEWcpNWPTiIDLOBwHSVqXwvdRvpucykd3LynabJ2pSxKZ6Z3aOp+JD3/nLzC42FbK1ny+xn8ZgKmGzvvR5r1XD6dY0iLImSwiWEsEzxJgEQCIcoiGghdpUIiVCCKvJLlTibBiFIBLEEW2WBCAkAhAQGwCxDAlKIwCC2Dcp2yqWsTYE2UXJ7gJxO1TjKjZmQ0lc9nOQCF+rvAHfO7Gmp3DUmcJ0g2wGctw3IP2RKbasluRTefBcO19nDrZd7CTdSbSsks3xtyXbq3yRr6uCK27bVGbQAcT58Jk0MM18pOu88lHPvi6VQpT6x/jcD7K7woinxOWkXOjP6gcPxlC7s1Fkh2KxapoutuJ11mqrbSc6aEHhabbo10eqYxs7lkw6mzMPic/QS/ueE6/CdGKDVLLQRcNSOVVy3bEVRvao51ZV3AX1N+U5yjHUi0pdR5rha+R1fdZvbcfYmbmsA1RH3jMPQ7veesLs6nlyNTQoRYqVXLblbdaabH9CsO4PU5qDbxl7VMH6p3eVoHSJvMlRtkszzDa2IuwXkSfOwH5y8FSXLne1hqAd3iZudt9DsaK4yUetU6B6ZXKe83PZ8/eZQ6AYx1AepRpKNcoLub99hb3jN6NlmLtJyeVzma203PZoiy8wBr+USuArsczB27rm/qZ0WL+T7FoL0qtGp+z26R8r3HvNXhcXXw9Q0cQjKRa61B2lHAg/OXv1ElNP5SGn+u/oa1gynUWPJhMmlTR11FjuMydtWcB9L7tJrsLVsddx0MnVXO0lYyKWzqa1A1SmatLc6K7I9uakEajluM7bo9sCjRbr8LiKzUatP+zfKwIO4g2BBBHG/ETjUrhdD8PD9n+k3vRPbISt1BP6usex+zV4fxbvG3Mz3YGrFVFGa10fFP7FbtTDydJzptq2q4NdnNa/vY7NhFMI9hFsJpUZS4hhBjiIphGJhpgkQLRkBhCQaYMku0kI4ZaEJQhARYthAQgJQjFEBi2WBDUQVEYsFsFs1/SLE9XhnbnZL8g1gfa88wV+sqi+4sundv8AunruNwVOtTNKquZGtcXIvYg7x4TzXbOENHEB30NSriGtawVFqvTpgDgMqrpKPaVKTfSclbz/AHNDsTExS6Hi3fyX0Sb/AJMfbGJ7WUcBr5wcMjYlqOHp/G75Odt2p7gLnymursSxY7ydO6873YGETC4CniUoh8fXFVcOQCzWqM2U27ktr3ynf4UrGhcnKTNjtnpPhdmIuGpU2rVaaACmpConfUfgxvewBOvfOXX5WMSD/dMLl+jmq3/iv+E3ezvk96w9Zj6rHN2jSpsbsTqesqbzqfm+s6bCdE9n0gAmCw+nF0FVvV7mBemlpc5xqSd72Nf0P+UDD46oKDUzh8QQSqlg9OpYXIVtNbAmxHrOwImlq9HcGzK/6LRSpTZXp1KSClURlNwQyWO/huM3im+sVPdb/CMipLV3KywSsZF1qhVSQuZgCVUEAseAudBBCAenND0n6PJi6RQ2WqoJo1LfA3I81O4j8QJx+2tvdI6Ts5w+SlclVo0aWIRV4DMLsfHTymJsr5VsQpy4vD06q3szUb0qq8+ySQT3dmOVKWsbPvFdPHSSfgaCozKDTcFWUlWU71YGxEx8LTzG1wNTv8Z3uK2EMbjKOMw9jgsQqVarGwOZCQyFd9zlA/inGVwOtqfvam76xjVJMFx5g4vBOBdTmtw3G3dzjMNsTHkLUpYdmXR0dHpMNNxFm334b4D4zKLMwsd1z+M3vQ2pi0rdmhWOHqf2l0ZUHJ1LWBPhvHlH4eKnNRlfPlwPLjakqdNzptXXCXHq1XrfQ7jDOzU1Z1Ku1NSynerEaj1lsI1oBmrjkYoSYDCNaBDTCQoiURDIgmMDTAtJDyy5Nwi5ayQhAYpliNEBYYgMBhLGKIKiMURbFthicD8pYtWonnRcejj/ANp34nGfKVh7ijU5NWpH7WRh/IZ4Mer0Jd31RY7Kkli4dd1/izgdSbDeWsPGe+YDBLTpUksCaVJKSnkAoBt6TxDZNDPiqCfSr0gf4hee81NB4TNVnobWlxBgzndsdJKdOoKCitVrsMy4fC0jWxLLp2su5F1Grb+UUNtYmn2q2ydppSuL1FFOsyj6TU0NwBxtAVKbV0hkqtOLs5ZnUxtLdMDZ2Np16S1qNRatJx2XXu3gg6gjiDqJnUzpFhPTIMxTnWE7aRRM45FzmOlXQzDYxSwUUcSB2ayC1zwFQD4h7jhOjFQcxCkqTTujpRTVmjiPk+apRNfB1gVNIioFJJync9u49k+ffPO6lXtsT85mJ8zPZto4NVd8UCA64WtTP7W5lJ8LH1nh+Jf856Kb3m2Jmt1JcgwrMwCE9ZcGmeOddR909pwVbrKSVPp0kf8AiUH8Z5H0XoM+KpEDRK9Anwz/AJA+k9go0VRFRRZUVUUclAsJd7MTSk/fvMzG3JpyhG2aV/H2gWimjnijLhFGgDAIhwWhhC2EAiNgGGgkBJClQhlw4QlCEIsSwhDWCIYgsBsNYwRYhlrAk7gpYxbtxBz4EXtE3JCrocpszNxF+Q9z4a6rpXsU1qBWkzAhg6q7ZlzAEafR0JGnOTHC5VTqFUG3AudSx7/zMyNmYg5WptrlsV55Du9CCPITHVsTUqzdS+vDhbkfS8Ns6jh6UaSina13ZXb53try8NDzvoSmfaNBbG6uzN3ZFY/eBPXtvYpqdB3pqHq9lKKHc9eowSkp7s7Leed9CcJbbFflTGII+0629iZ6TicpyFvhTEYeofsVFP4QKlnNdwuEWovnmbHo50fo7OwzM16tYr12LrhC9bE1bXZrC5Ot8qjdpON2h8ripiDROFRMrZSlaoyV+7N2bI3drO96ZYSrVwVRKDOtUZHXq2KucjBiARrewM+cNqdEdqYjFPUcNiM7C+KqVlKlLAKXZjmFlAFrX0sJb0opQ39zfztbPLw5+hnq1aKnuynuZXvlnz15cus9ow5oVSu0MGMtPEv1OMpaDLXAulRgNM+5SR8QdDwE2KGaropsw4fAZWNy9agUvcZymTM+vPKx8BebNDK7H04wrOMdC42ZUlUw6lLj7/cl7nuH3/8ALTACY7E64KnQpUfm4nFCo5qj6VKiliV5MzC+8AggnOweHFZhTPw1GZqnfSXePAgAfanmXyh9OqmdWwuNLK17YVVxGHOHT5pawy1Cddc2nK26cLh1UTlJ2S7fQ7G4mVJqEM28+Gh1+0ti7dojOlXBY5Rq1A0WwtUjlTYEjN4n1hdF9vJi6bFQ6PSc061GqMtahUG9HHkbHxvYgiY3yRdMq2KPUV2eopR8jVGz1KbpYlcx1ZSLnXdb02XSbALh9rYfE0xb9OSthcSBuepSTraNQji2VXW/K0ZisMoacrprivfgKwmLlN2fOzT4MrpE+XC1j/kuPUETwutvM9m6c18uDq94CjzNp42qFmCqLszBVHNibAepnmo6M9tfVHonyabMC4dsQwF6lXsdy08wv6l/SdiYjZWDFChToA36qkqE8yBqfM3Me01WHp9HBRMDiq/T1ZT5vy4eQtopo1otp6UecUZTQoLRgwCA0OCYSCQEkK0qFcIZLEC8IQGAxghiCIQgsUGsDG/2NT91U/lMMQcRTzIyfSR0HmpETUTcWlxTCpyUZxk+DT80YON+MxWGOWqp53Q+Df1CxmKN8r8GUHwO+0y8Fh1y5ioJJuCQDax0ty5zE6I+sS1EbEwKpi8RWtq/Vi/da5950BfQ3GYWsV01B4azBw62JPO3sLTMWQ3cQ4LM2OB2s9IZHBqINFZSOsA4BgT2vEa93GXVxmFds5ohqm+5w5zE95YWvNeDGq0fDE1I6P34niqYOlN3a9+DG4qu1Q5mGVVvkU6m50ue/wDrE3sJXWBjruBtKqhBu9QbGJk953Y+EFFKKQ3ZWJFN6bt8GU0nPBQ1tT3XAv3X5Tj+lfyUJWrZqYqqlsqtQNMtkvcK6ORqLkAg7t86LCVBmamdRfMPqt/XNM6jiKtMZabgqNyuMwA5DUH3nqw2K6JOLV0/fkeHH4Hp5KUXuyXFfw14mL0D6G08AM4VlsGyq7K9Qs1gzuV0vYWAG4EzM24VqYinx/Rw9Q8g7rlUeOUufMc5Hx2Ibe6KP8un2vViR7TGYgDTiSTqSSTvJJ3mTiMV0iy7OqwODwHQa9b5tt6tnG/KhXthlHFqyj0BM0nQXozny4ytcKDmoLqC1t1Q93L15TfdLdm/pVahRP8AZgtVq8DlGlvPd5zY46sbCjT7CqoDldCq20ReRtx4DxuPOpWikiyVFSm3JXSyMhamGD5B1We9rdnPff6xmHckEE3KOUvzAAK/6SJrcNRF1UAAXWwA0ve82GH+KpyNc28qdNT7qZYbKbVdxWjT9Cn+JKcHhVNrNSST7b5e+QwxbRjRZmmRiBZgmMaLMNBoAwTDMAwgkSSVeSGGWDCEWpjBBYEgxDWAIQMFihkJTFgw1gMhoTUpANlPwObqeC1DvXzOo77jiIzDqVGU8DoeBEaVBFiAQRYg6giCA67u2vAsf1g8CdG87HvMz2P2dLedSkr31X2+xr9kbcgoKhiHa2Sk9LcE+VtLvLLN31yKHGZKia7D1l64C+rIbqQVYZSLXB1+cfSbVBKVprJmkck807plqsIJE16rowOUNT+eR8SjmFtqN8zKbqwupDAi4IIIIkC5SNIa/sSD4g6wevmVj9nEnPTOVj8WlwfETXHCYjd2B3qpv7kyR8ZpoPD1L19Pm0wG8SSR7ffNsxmHs/Z+QXOpJuSd5MzWWQA5JsHNFVDGkTHqTgkYbp+sLccoUH1P4zFq4IqM2bNrdrixueN5sFFzeLxZJARRcsfQc5KGGNhbLeo3w01LH0mTh1IQX+Igs312N39yYJojROCkO55tvUfcfIc41poNk0Gouq+OS7P39DGfEmMU6kcPF/Lm+22S7lr2rimAYBhGUZdozIDQDCMAwkGgTKaXKaEMQNpUuSGFcARoigYxZDImMEKBCBgC2EDGLFw1gsAcsJYsRgi2CBjdFD/9Ng7fV3P/AKST5TbYc3F5rwOevAiTZdXKTTY6pYAn51M/A3tY96mZ/a9C0lVXHJ+n28DV/D2KTpyw71X4l2PXwefezbATFqbOW+amzUmOpNO2UnvU6eYse+ZYMuUxormGKeJXc1Kr45qR9O1f1EE4mqPiw1TxU02Hs1/aZ9pc465r/wBPHGlXB/cVreuWXRqOxN6RRBbKzaFj9XePO0zYuq9pJNzHeYWLfKpO87gObHQD1ImTUea2oBWexANKmSDfdUq7iPBfv8IyhRlWmoR4gYnEww1J1Z6Lxb5L31vIfdUADMBw13se4bye4QM7NogNNTvdgBUP1V4eLekulhqafBTROeRACfExhMu8PsmEXeo97q0X3Zl8X8R1ai3aMdzreb7uC8+55i1UAWG71PiTxMEmExgGXMVbJGdzbuyjKaUTKYwzgDBMKAYaGRKlNLgGEGiXlSSoVkFYARqxSmGDJZMkNhLFiEIsUNhLFiMWCwGhghrFiMWLYLGLF16RNmWwqJfKTuIO9D3Gw8wDwhrGRNWnGcXGSumMoVp0aiqQdnEycFigy+xB3gjeD3iZYImmdCDnT4vnKdA47+Tcj5HufRxntoVOjKeREyuKwsqErPNcH6PrN5gcbTxkLxyktY8utdXt2NoDIWmEMYOMpsYJ5T27jMt6lphVasRiMaACWIVRvJIA9ZjAvU+G9NOLkWcj9lTu8T5DjG0qM6srQVwK9elhob9WVl5vsXH3wLr1S7dVTJB/xag/w1PAH6ZG7lv5AvpoFAVQAqgAAbgBuEqlTVQFUWA89eJJ4nvhEzS4PCRoR5t6v07DDbT2jPGVL6RWi9X1vyWQLGCTIYLT3orQSYBMsmC0JEkgGXKaEiQTBlkwYaDiUYBhGAYSGpEklS5JIlTGiIvGIYTGSQ5TDEUsYIDENDBDWLWMWAwGGsYsWsasWwAxDEAQxFSJSDWavaCk1jYkEUqOoPNqvrum0Ex6dIOzsNQClO4/ZUt/vlZtJ2oPraLvYKvjE+Sb9PU1T1qw3ZD4gg+0qjVrM6oSih2IOVSSAFLE6m3C27jNo+GmGtWnTrr1j06Y6urY1HVAWugFr8bEyjw8VOrGMtLmux1aVLDVJw1Sy7dDY0sGinNYs43NUOZx4cF8rRzGRHDC6kMOBBBHqJRmphFRVoqy6j53UnKpLenJt83m/MGAxhGAY5CWCYsmG0WYxEWKJgmQwTDsSS8EyzBMIJFEwTLgsYQaQJMGFBhIYkSSVJJDuKkUwYQhjGNUxqmIUxqxbQmSGrGLFLHLFsU0MURixawqlVUQu5Cqql2J3BQLkxUmDa4bVAoLMQqjUliAAO8mazHdIqKL+rdKtQ6IiHS/MtuC985naWNesczXABJROCjgSOLW3nxA0mrwp/WHxt7Sgr7UbbVJZc/X35G1wPwrG0Z4qTvrurxs3rfnbTmzL27tCvUNqjnKf8NbrSHdk/O5nddCqYXBUwALMDU/jYke1p57tLn4T0Toof8A8lD/ALej/IJU1JOWcndmgr0adGCp04qK5JWRtq9KcH080NI8CXX1Kf1nobaicJ08sTRp/ONV6n2VXKfd19IuOonDt76scvgcdVotnpOyHedey/1l3N9/K09B2DtdcTSzWC1EOWqg3K3Mfskaj04ThcaoAAA3CBsXatTD1GNMKwKorKwJVtSRax0Iuee+WGCxTpSs3+H3oI25smOKpb1OK6RaPS/NN9l7X48rnpxizMLY+1kxNMsgKspy1EJuyHhrxB4H8QRMwzSU5qcVKLumfOa1GdObhNWayaAaLMMwTHIWAZRkMq8JEpAkwTLJgGGGiXiyYRMCGg0SUZcqSGSSSSccIEKAIQhj2gxGLFxggsW0NWOWIUxyxMhbiPWabpbiQtBadwDUqKtr6lVDOdOWZVHnH7Y2suHTcGqvfq0va9t7NyQf0nB4+s9Vi9Vi7NvO4gDdlHzQOAH36ym2jjIwi6S1a8L8/sX+wtk1K9WOJkrQg08/1NPRdV9X3c7bGibzAvlrW56j7j+EHA4wg5X+MceDjmO+M2ku513rr48x6TOm/burofjxdZ3PRDEK2EpBHVilJEcAglWAtYjgdJwbVA6eUDZmzsQy9ZRUkq7Jmptlddb20IPER1CiqrcXKxWbVqyowjNR3s7Hr4fTfPPekeIFTGGxBWii09Nwc3ZvvUfZmtxDY/I3WNiurVSz5nqBcoFzck66CY2HGSmOBNyfE6ya2G6FK8k2+QnZVb+oqSkotKK483y+pWNqjU8IWFphaRLDtNfyJ/pYTGUZ21+FNT3twH4+kPE1uAiEi4k87mz6HYnJiwt9KqPSI5sAHB/0MPOd+Z5Jgcd1denUAzdVUSo1jwB1A7yLz1LZ+0KdemKtJsynQ30ZW4q44GX2y6i3HTvmmYH4lw7/AKhVkspJJvhdX9LeAxoBjWijLlGaAMAwmgMYxEoEmAxltAMJBqJCYMkkMMkkkk44kkkk44x1lySRg9jVhiXJFsBjFjklSRUwTkeln94/8FD+arNI2+SSY3HfmZ9voj6ZsX/r6HZ6swsV/h/vPwm3O7yEkk8z4HtpfNLu+hiYH4fM/eZ1fQj4Kn77/ZTkkjqP9xlftH8ou42/Sf8AudX6q/zrOHxW4SpJOI1R2yf7U+30QrC/AfrtMatukkiOJ7p/KjBo/B9o/fO4+Tn4a3jS+5pJJY4H8xHv+hnds/kJ9kf9kdc0Ay5JpUYIS0U0uSNRKAaBJJDQYJkkkhBEkkknHEkkknHH/9k=",
          chatlog: [
            {
              text: "Hey vish, where is your friend, Shruthi?",
              timestamp: "05:00 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I don't know bro!",
              timestamp: "05:01 PM", 
              sender: "me",
              message_id: 2,
            },
            {
              text: "Are you sure, vish ?.",
              timestamp: "05:05 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes bro, I am damn sure",
              timestamp: "05:07 PM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "All right James",
              timestamp: "05:09 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Chris",
          image:
            "data:image/jpeg;base64,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",
          chatlog: [
            {
              text: "Where are you vish ?",
              timestamp: "7:00 PM",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I'm in Market now",
              timestamp: "07:07 PM",
              sender: "user",
              message_id: 2,
            },
            {
              text: "call me ASAP",
              timestamp: "07:07 PM",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "07:09 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Is everything fine ?",
              timestamp: "07:10 PM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Yeah !!",
              timestamp: "07:12 PM",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 8,
          name: "Stokes",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNONZctlZFSfS2kiUG13vz3pAg6cutDRuyPQ&usqp=CAU",
          chatlog: [],
        },
      ],
    },
  };